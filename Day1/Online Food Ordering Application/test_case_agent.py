from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

test_case_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
        You are a QA Test Design Engineer.
Prepare a tabular test case structure with all the fields like:
-Test ID 
-Scenario Description
-Category 
-Preconditions
-Test Steps 
-Test Data
-Expected Result

Cover all of the following requirements:
1. Positive scenarios
2. Negative Scenarios
2. Cart Operations (add items, remove items, empty cart validations)
3. SAVE20 Coupon Business Logic:
   - Boundary Value Analysis (BVA) for the ₹500 threshold:
        ₹499 (Coupon rejected)
        ₹500 (20% = ₹100 discount)
        ₹501 (20% = ₹100.20 discount).
   - Maximum Cap Threshold: 
        ₹750 (20% = ₹150 discount applied), 
        ₹1000 (Cap reached: ₹150 discount applied, not ₹200).
4. Payment Methods: UPI, Credit/Debit Cards, Cash on Delivery (COD).
5. Order Lifecycle: Payment success with Order ID generation vs. payment failure where no order record is created."""
    ),
    (
        "human",
        """
    Requirement:
    {requirement}
    """
    )
])

#creating langchain runnable
test_case_chain = test_case_prompt | chat_model


