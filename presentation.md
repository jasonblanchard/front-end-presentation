# Font-end JS Frameworks & Single-page Apps

---

## About Me

---

## Traditional, server-rendered Apps

- Rails example

---

## Traditional, server-rendered Apps

- All (or most) state is managed server-side.
- Update that state in batches with request-response process.
- **Advantage of this: simplicity**.

---

## Web apps with rich UX

---

## Web apps with rich UX

- ex. Google Docs, Slack, Todo apps, etc.
- Transition to **managing lots of state client-side**.
- Not something Rails can solve on its own.

So how are people solving this problem?

---

## Three main categories

1. **Roll your own** - Plain old JS, Rails UJS, jQuery, etc.
2. **Two-way data binding frameworks** - Angular, Ember
3. **Re-render everything frameworks** - React

(Might also see Backbone, but it's kind of old skool and doesn't fit in a category here)

---

## Two-way data bindings with Ember

- Angular - works similarly, used to be super popular, still is (maybe)
- Ember - Great place to start
  - low barrier to entry, best practices built in, familiar to Rails folks (MVC-ish), existing integration with Rails API
- The router + SPAs - URL is just another piece of state

---

## Two-way data bindings: Why not?

- Complexity as app grows
- Complex dependency graph
- Cascading changes - hard to debug

---

## Re-render Everything with React

- Higher barrier to entry
- Very performant
- App organized by component which fits with DOM tree structure
- (maybe, probably) the way of the future
- React Native - super cool

---

## You still need a back-end!
- Logic for storing persistent state
- Front-end apps talk to your back-end with an API
  - Ember adapters & serializers
  - React Flux architecture

---

## Challenges with front-end frameworks

- Complexity
- "Hard things are easy and easy things are hard"
 - Authentication/authorization
 - Global application state, like flash messages
- SEO is weird
- Testing is tricky
- avoiding "loading" spinners is tricky
- Still young and changing like crazy
