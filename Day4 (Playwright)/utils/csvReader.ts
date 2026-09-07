import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

export function readCsvData(filePath: string) {
  const resolvedPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(resolvedPath);

  return parse(content, {
    columns: true,
    skip_empty_lines: true,
  }) as Array<{ username: string; password: string }>;
}