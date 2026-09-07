import * as path from 'path';
import * as XLSX from 'xlsx';

export interface UserCredentials {
  username: string;
  password: string;
}

export interface CheckoutCustomerData {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export class ExcelReader {
  static readonly defaultFilePath = path.resolve(__dirname, '../testData/testData.xlsx');

  private static readSheet(filePath: string = ExcelReader.defaultFilePath, sheetName?: string) {
    const workbook = XLSX.readFile(filePath);
    const resolvedSheetName = sheetName ?? workbook.SheetNames[0];
    const sheet = workbook.Sheets[resolvedSheetName];

    if (!sheet) {
      return [] as string[][];
    }

    return XLSX.utils.sheet_to_json<string[]>(sheet, {
      header: 1,
      raw: false,
    });
  }

  static readUserCredentials(filePath: string = ExcelReader.defaultFilePath, sheetName = 'Credentials'): UserCredentials[] {
    const rows = ExcelReader.readSheet(filePath, sheetName) as string[][];

    if (rows.length < 2) {
      return [];
    }

    const [, ...userRows] = rows;

    return userRows
      .map(([username, password]) => ({
        username: username?.trim() ?? '',
        password: password?.trim() ?? '',
      }))
      .filter(({ username, password }) => username.length > 0 && password.length > 0);
  }

  static getUserCredentialByUsername(username: string, filePath: string = ExcelReader.defaultFilePath): UserCredentials | undefined {
    return ExcelReader.readUserCredentials(filePath).find((user) => user.username === username);
  }

  static readCheckoutData(filePath: string = ExcelReader.defaultFilePath, sheetName = 'Checkout'): CheckoutCustomerData[] {
    const rows = ExcelReader.readSheet(filePath, sheetName) as string[][];

    if (rows.length < 2) {
      return [];
    }

    const [, ...checkoutRows] = rows;

    return checkoutRows
      .map(([firstName, lastName, postalCode]) => ({
        firstName: firstName?.trim() ?? '',
        lastName: lastName?.trim() ?? '',
        postalCode: postalCode?.trim() ?? '',
      }))
      .filter(({ firstName, lastName, postalCode }) => firstName.length > 0 && lastName.length > 0 && postalCode.length > 0);
  }
}
