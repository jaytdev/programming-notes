# Alexa

"Alexa, ask History Buff what happened on May 5th"

- Wake word: "Alexa"
- Starting phrase: "ask"
- Skill invocation name: "History Buff"
- Utterance: "what happened on May 5th"

Utterances are mapped to **intents**.

Two parts:
- Interaction Model (front-end, also know as a **skill interface**)
- Hosted service (back-end, or **skill service**)

There are three request types:
1. Launch: sent to lambda when user invokes the skill
2. Intent: sent to lambda when user interacts
3. SessionEnded: when the session ends
