# 🔐 Supply Chain Attack Demo (npm)

This project demonstrates a controlled **supply chain attack** using a malicious npm package.

It shows how changing a dependency version can affect a production application **without modifying its source code**.

---

## ⚙️ How it works

1. The application depends on an external npm package:

   ```
   @maaz96/kc-mock-feed
   ```

2. During build/deployment (e.g. CI), dependencies are installed:

   ```
   npm install
   ```

3. The application uses data from the package:

   ```
   require('@maaz96/kc-mock-feed')
   ```

4. When the package is updated on npm:

   * the application behavior changes
   * **without any changes in the main codebase**

---

## 🧪 Demonstration

### Before attack

* Application displays expected data
* Dependency returns normal content

### Attack

* New version of npm package is published
* Content inside the package is modified

### After attack

* Application output changes
* No changes in application source code
* Behavior is controlled by external dependency

---

## ⚠️ Security impact

This demonstrates a typical supply chain risk:

* Trusting external dependencies
* Automatic updates in CI/CD pipelines
* Lack of dependency verification

In a real-world scenario, this could lead to:

* malicious JavaScript injection
* data exfiltration
* compromised production systems

---

## 🛠️ Technologies

* Node.js
* npm
* JavaScript
* CI/CD (dependency installation stage)

---

## 📌 Notes

This is a **controlled educational demo** created for learning purposes.
No real malicious activity is performed.

---

## 🚀 Key takeaway

Even small and trusted dependencies can become an attack vector.

👉 Updating a package can change your production system without touching your code.
