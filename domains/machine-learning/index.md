# Machine Learning

## Framing

ML systems learn how to combine input to produce useful predictions on
never-before-seen data.

A **label** is the thing we're predicting–the `y` variable in simple linear
regression. Spam or not spam.

A **feature** is an input variable–the `x` variable in simple linear
regression. Words in an email, the recipients, the sender, etc.

An **example** is a particular instance of data, `x` (this is a vector).

A **labeled example** both feature(s) and the label. These are used to
**train** the model.

An **unlabeled example** contains features but not the label.

A **model** defines the relationship between the features and label.

**Training** means creating or **learning** the model. You show the model
labeled examples and enable the model to gradually learn the relationships
between features and label.

**Inference** means applying the trained model to unlabeled examples. You use
the trained model to make useful predictions (`y`).

A **regression** model predicts continuous values. What is the value of a house
in California? What is the probability that a user will click on this ad?

A **classification** model predicts discrete values. Is a given email spam or
not spam? Is this an image of a dog, a cat, or a hamster?

## Linear Regression

