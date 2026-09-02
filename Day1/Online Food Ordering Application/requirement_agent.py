from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

requirement_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
        You are a QA Requirement Analyst.

Analyze the provided requirements and produce a structured breakdown covering:

1. Functional Requirements
2. Positive and Negative test scenarios
3. Missing or Ambiguous Requirements
4. Edge Cases & Boundary Conditions
5. Field & Logic Validations that should be implemented

"""
    ),
    (
        "human",
        """

Requirement:

{requirement}
"""
    )
])

requirement_agent = requirement_prompt | chat_model 







































# def run_requirement_agent(requirement_text: str) -> str:
#     return requirement_chain.invoke({"requirement": requirement_text})


