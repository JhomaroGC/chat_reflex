import reflex as rx
import openai
from chat_reflex import openai_env
import os

key = "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"
# openai.api_key = openai_env.API_KEY
openai.api_key = key


# openai.api_key = os.environ['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']


class State(rx.State):

    # The current question being asked.
    question: str

    # Keep track of the chat history as a list of (question, answer) tuples.
    chat_history: list[tuple[str, str]]

    def answer(self):
        # Our chatbot has some brains now!
        session = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": self.question}
            ],
            stop=None,
            temperature=0.7,
            stream=True,
        )

        answer = ""
        self.chat_history.append((self.question, answer))
        for item in session:
            if hasattr(item.choices[0].delta, "content"):
                answer += item.choices[0].delta.content
                self.chat_history[-1] = (
                    self.question,
                    answer,
                )
                yield
