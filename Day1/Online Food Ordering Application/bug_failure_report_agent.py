from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

bug_report_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """

    You are a QA Defect Management Specialist.
    Transform raw defect descriptions and analysis into an industry-standard JIRA Defect Report format.

Format the output with:
-Defect ID & Title (Concise, action-oriented)
-Severity (Critical/Major/Minor)
-Priority (P1/P2/P3)
-Module / Sub-system (e.g., Checkout / Discount Engine)
-Environment (OS, Browser/App Version)
-Prerequisites & Test Data
-Steps to Reproduce the defect
-Expected Result
-Actual Result
-Proof/Screenshots
"""
    ),
    (
        "human",
        """
        Requirement:
        \n
        {requirement}
        \n
        Defect Information:
        \n
        {defect}
        """
    )
])

#create LangChain runnable
bug_report_chain = bug_report_prompt | chat_model

