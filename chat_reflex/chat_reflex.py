import reflex as rx


def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(question, text_align="right"),
        rx.box(answer, text_align="left"),
        margin_y="1rem"

    )


def chat() -> rx.Component:
    qa_pairs = [("What is Reflex?", "A way to build web apps in pure Python"),
                ("What i can make with it", "Anything from a simple website to a complex web app!")]
    return rx.box(
        *[qa(question, answer) for question, answer in qa_pairs]
    )


def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(placeholder="Ask a question"),
        rx.button("Ask")
    )


def index() -> rx.Component:
    return rx.container(chat(),action_bar())


app = rx.App()
app.add_page(index)
app.compile()
