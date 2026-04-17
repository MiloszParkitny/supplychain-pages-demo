# 🔐 Supply Chain Attack Demo (npm)

> ⚠️ This project demonstrates how updating an npm dependency can change application behavior in production without modifying the source code.

---

## ⚙️ How it works

The application depends on an external npm package:

```
@maaz96/kc-mock-feed
```

During deployment (CI/CD), dependencies are installed:

```
npm install
```

The application loads data from the package:

```
require('@maaz96/kc-mock-feed')
```

When the package version changes, the application behavior changes — even though the application code remains the same.

---

## 🔥 Attack vector

The attack is performed by modifying a trusted external dependency.

* No changes are made to the main application
* The malicious change is introduced through the npm package
* The CI/CD pipeline automatically pulls the updated version

---

## 🧪 Demonstration

**Before attack**
Application displays expected content

**After attack**
Behavior changes due to modified dependency

---

## 📦 NPM dependency

https://www.npmjs.com/package/@maaz96/kc-mock-feed

Versions used:

* `1.0.0` – original behavior
* `1.0.1` – modified version (simulated attack)

---

## ❗ Why this matters

Modern applications rely heavily on third-party dependencies.

This demo shows that:

* even trusted packages can become attack vectors
* CI/CD pipelines can introduce risks
* production systems can be affected without code changes

---

## 🔗 Live demo

https://miloszparkitny.github.io/supplychain-pages-demo/

---

## 🛠️ Technologies

* Node.js
* npm
* JavaScript
* GitHub Pages
* CI/CD

---

## 📌 Notes

This is a controlled educational demo.
