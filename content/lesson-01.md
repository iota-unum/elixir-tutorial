---
title: "Lesson 1: The Alchemist's Toolkit"
date: "2023-01-01"
---

Welcome, apprentice!

You stand at the threshold of a new and exciting world. Forget what you think you know about programming. Today, we trade in our text editors for grimoires, our terminals for cauldrons, and our code for powerful incantations. This is the art of Alchemy, and our medium is Elixir.

Before we can transmute lead into gold—or, in our case, build a living, breathing application that can monitor the health of the entire internet—we must first set up our laboratory. Every alchemist needs a clean workspace, a reliable heat source, and a sturdy cauldron. This lesson is about securing those fundamentals.

Let's begin.

### 1.1 The Alchemist's Toolkit: Installation

Our first task is to install the Elixir toolset onto your machine. This provides us with everything we need: the compiler (which translates our spells into something the machine understands), the `mix` build tool (our Grimoire, which we'll meet later), and most importantly for today, our interactive cauldron, `iex`.

The Elixir community has made this process wonderfully simple.

#### For macOS Users (using Homebrew)
If you're on a Mac, the easiest way to get started is with a package manager called Homebrew. If you don't have it, you can install it from [brew.sh](https://brew.sh/). Once Homebrew is ready, open your Terminal and cast the following spell:

```bash
brew install elixir
```

Homebrew will handle all the details, fetching Elixir and its core dependency, the Erlang Virtual Machine (the magical heat source our cauldron sits upon).

#### For Windows Users
For those of you practicing your craft on Windows, a handy graphical installer is available. Visit the official Elixir website's installation page: [https://elixir-lang.org/install.html#windows](https://elixir-lang.org/install.html#windows)

Download and run the installer, and it will guide you through the setup process step-by-step.

#### For Linux Users (using asdf)
While most Linux distributions have Elixir in their package managers, the most common and flexible method in the alchemist community is to use `asdf`, a tool that lets you manage multiple versions of languages. This is a fantastic tool to learn. You can find installation instructions for `asdf` and its Elixir plugin on its official site: [https://github.com/asdf-vm/asdf-elixir](https://github.com/asdf-vm/asdf-elixir).

#### Verifying the Installation
Once the installation is complete, you must verify that the magical energies are flowing correctly. Open a new terminal (or Command Prompt on Windows) and type the following command:

```bash
elixir -v
```

If all went well, you should see a message printed to your screen detailing the versions of Elixir and Erlang that were installed. Congratulations! Your laboratory is now equipped.

### 1.2 Your Interactive Cauldron: An Introduction to `iex`

With the tools installed, it's time to light the fire and peer into our interactive cauldron. This cauldron is called **`iex`**, which stands for **I**nteractive **E**li**x**ir. It is a place for experimentation, for trying out small spells and seeing the results instantly. For all of Part 1 of this book, the cauldron will be our home.

To begin, type `iex` into your terminal and press Enter.

```bash
iex
```

You should see a new prompt that looks something like this:

```elixir
Erlang/OTP 25 [...]

Interactive Elixir (1.14.0) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

Look at that! `iex(1)>`. This is the bubbling heart of our cauldron, waiting for its first ingredients. That `(1)` is a handy counter; every time you enter a command, it will go up, helping you keep track of your experiments.

To exit the cauldron and return to your normal terminal, press **`Ctrl+C`** on your keyboard twice. Go ahead, try it now. Then, start `iex` again to continue.

### 1.3 Your First Incantation: `iex` as a Super-Powered Calculator

The simplest spells are often the most fundamental. Let's use our cauldron to perform some basic alchemical calculations. Type the following into your `iex` prompt and press Enter.

```elixir
iex(1)> 5 + 10
15
```

Instant results! The cauldron consumed our numbers and gave back the sum. Let's try some others.

**Multiplication:** Imagine we need 3 Mandrake Roots, and each costs 7.5 gold coins.

```elixir
iex(2)> 3 * 7.5
22.5
```

**Division:** We've brewed a 500ml potion that needs to be split into 8 equal doses.

```elixir
iex(3)> 500 / 8
62.5
```

**Order of Operations:** The cauldron is wise and understands the proper order of incantations. Let's say a potion requires 2 Griffin Claws at 15 coins each, and 1 vial of Phoenix Tears at 50 coins. The cauldron knows to do the multiplication first.

```elixir
iex(4)> 2 * 15 + 50
80
```

You can also use parentheses to group spells and control the order, just as you would in standard mathematics.

```elixir
iex(5)> (2 + 1) * 10
30
```

You have now successfully used `iex` to perform your first calculations. You've added ingredients, calculated costs, and measured doses. These are the first steps on your journey to becoming an Elixir Alchemist.

---

### Lesson 1: Exercises

It's time to get your hands dirty. Use your `iex` cauldron to solve the following challenges.

1.  **Potion of Vigor:** A Potion of Vigor requires two key reagents: `Moon Dew`, which costs 12.5 coins, and `Dragon's Blood`, which costs 35 coins. It also requires a simple `Crystal Vial` to hold it, which costs 2 coins. What is the total cost to craft one Potion of Vigor?

2.  **Extended Brewing:** A potent "Elixir of Stone Skin" takes a long time to brew. It must be heated for 45 minutes, then cooled for 15 minutes. This heating and cooling cycle must be repeated 3 times. Finally, it must be left to settle for a full 60 minutes. What is the total brewing time in minutes?

---
<details>
<summary>Solutions</summary>

1.  `iex> 12.5 + 35 + 2` should result in `49.5`.
2.  `iex> (45 + 15) * 3 + 60` should result in `240`.

</details>

---

You have done splendidly, apprentice. Your lab is set up, your cauldron is bubbling, and you've already used it to master the basic arithmetic of alchemy.

In our next lesson, we will learn how to bottle these magical essences—to give them names so we can refer to them later. We will learn about the fundamental types of ingredients that make up every potion in the Elixir world.
