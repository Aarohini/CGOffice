from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

bug_analysis_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a Lead QA Root Cause & Technical Defect Analyst.
Perform in-depth technical analysis on reported software defects against business rules.

Analyze and output:

1. Compare the expected output vs. actual behavior 
2. Root Cause Hypothesis: Identify the failure mechanism in the code logic 
3. Defect/Bug Risk Assessment
4. Suggest fix and logic corrections and regression tests
"""
    ),
    (
        "human",
        """
    Requirement Context:
        \n
        {requirement}
        \n
    Observed Defect:
        \n
        {defect}
        """
    )
])

bug_analysis_chain = bug_analysis_prompt | chat_model 
