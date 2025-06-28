---
title: "Lesson 2: Bottling Essences"
date: "2023-01-02"
---
## Lesson 2: Bottling Essences

Well done, alchemist. In our last lesson, you fired up the cauldron and performed your first calculations. You computed costs and brewing times, watching as `iex` instantly gave you the answers. But then... the answers vanished. Like steam rising from a potion, they were present for a moment and then gone, lost to the ether.

Calculations are useful, but an alchemist's power comes from their ability to capture, store, and combine magical essences. What good is calculating the cost of a potion if you can't save that cost to use in a later step?

In this lesson, we will learn the art of "bottling" these values. We will give them names, study their fundamental properties, and learn how to inscribe magical scrolls that describe our creations.

Let's head back to the cauldron. Fire up `iex` and we'll begin.

### 2.1 Giving an Essence a Name: Variables

To store a value, we need to bind it to a name. In Elixir, we call these named values **variables**. The spell for this is the `=` symbol, which we call the **match operator**. For now, you can think of it as an assignment, like placing a label on a bottle.

Let's say we have 5 units of Moon Dew. We can "bottle" this value by giving it a name.

```elixir
iex(1)> moon_dew = 5
5
```

The cauldron responds with `5`, confirming the value that was bound to the name `moon_dew`. Now, whenever we use the name `moon_dew`, `iex` will know we mean the value `5`.

```elixir
iex(2)> moon_dew * 2
10
```

This is incredibly powerful! We can create names for all our ingredients. Notice the naming convention: we use lowercase letters and connect words with an underscore (`_`). This is a common practice in the Elixir world, known as `snake_case`.

```elixir
iex(3)> potion_name = "Elixir of Vigor"
"Elixir of Vigor"
iex(4)> potency = 10
10
```

One of the most profound secrets of Elixir alchemy is a concept called **immutability**. It means you can't actually *change* a value once it has been created. When we do something like this, it might look like we're changing `potency`:

```elixir
iex(5)> potency = 15
15
```
But we are not! What we are actually doing is creating a *brand new* value (`15`) and telling the name `potency` to refer to this new value instead. The original value `10` is now simply forgotten, floating away like a wisp of smoke. This might seem like a subtle distinction, but it's a foundational principle that makes Elixir applications incredibly robust and predictable. We'll see why this is so important later.

### 2.2 The Core Reagents: Basic Types

Just as the physical world is made of earth, air, fire, and water, the world of Elixir is built from a few core data types. You've already seen them, but let's formally introduce them. These are our fundamental reagents.

*   **Numbers:** These are for all our quantitative needs. They come in two primary forms:
    *   **Integers:** Whole numbers, like `5`, `10`, or `99`.
    *   **Floats:** Numbers with a decimal point, like `12.5` or `0.01`.

*   **Atoms:** This may be a new concept. An atom is a constant whose name is its own value. Think of it as the "true name" of something. It's not a piece of text; it's a unique, guaranteed-to-be-the-same-everywhere-in-our-system label. We use them to represent status, states, or specific options. They always start with a colon (`:`).

    ```elixir
    iex(6)> potion_status = :brewing
    :brewing
    iex(7)> result = :ok
    :ok
    iex(8)> element = :fire
    :fire
    ```
    The status `:brewing` isn't the *word* "brewing"; it's a single, irreducible concept of "brewing-ness". This is much more efficient than using strings for the same purpose.

*   **Booleans:** There are only two of these: `true` and `false`. They are essential for asking questions and making decisions. Is the potion ready? `true`. Is it toxic? `false`. (Under the hood, `true` and `false` are actually just special atoms, but we think of them as their own type.)

    ```elixir
    iex(9)> is_glowing = true
    true
    ```

*   **Strings:** A string is a sequence of characters, used to hold text. We create them by wrapping text in double quotes (`"`).

    ```elixir
    iex(10)> ingredient_name = "Mandrake Root"
    "Mandrake Root"
    ```

### 2.3 Why Are Reagents Different Colors? (Understanding Types)

You may have noticed that `iex` gives different colors to your results. Numbers might be blue, atoms green, and strings yellow. This is a helpful visual cue about the *type* of data you are looking at.

To be more explicit, you can ask `iex` for information about any value using the helper function `i()`.

Let's inspect the `potion_name` we created earlier.

```elixir
iex(11)> i(potion_name)
Term
  "Elixir of Vigor"
Data type
  String
Byte size
  16
Description
  This is a string: a UTF-8 encoded binary. It's printed surrounded by
  "double quotes".
...
```

The cauldron tells us everything! It confirms the data type is `String` and even gives us a description. Now try it with an atom.

```elixir
iex(12)> i(:ok)
Term
  :ok
Data type
  Atom
...
```
The `i()` function is your magical magnifying glass. Use it whenever you are unsure about the nature of a reagent you're working with.

### 2.4 Inscribing a Scroll: String Interpolation

We often need to create descriptive labels or log messages by combining our bottled essences into a single string. We could do this by manually piecing them together, but Elixir provides a much more elegant spell: **String Interpolation**.

By using the `#{}` syntax inside a double-quoted string, we can embed any Elixir expression directly into the text.

Let's take the variables we defined earlier and create a label for our potion bottle.

```elixir
iex(13)> potion_name = "Elixir of Vigor"
"Elixir of Vigor"
iex(14)> potency = 15
15
iex(15)> "The #{potion_name} has a potency of #{potency}."
"The Elixir of Vigor has a potency of 15."
```

Look at that! Elixir evaluated the code inside the `#{}` brackets and seamlessly wove the results into the final string. It's like writing on a magical scroll where the names of your ingredients automatically transform into their true forms. This is a technique you will use constantly.

---

### Lesson 2: Exercises

Time to practice bottling your own essences.

1.  Create variables to describe a "Potion of Invisibility":
    *   Give it the name `"Potion of Invisibility"`.
    *   Set its `quantity_ml` to `50`.
    *   Set its `cost` to `199.99`.
    *   Set its status to `:complete`.
    *   Set a boolean `is_volatile` to `false`.

2.  Using the variables you just created and the magic of string interpolation, create a single string that reads: `"Label: Potion of Invisibility (50ml). Status: complete. Cost: 199.99"`. Store this final string in a variable called `potion_label`.

---
<details>
<summary>Solutions</summary>

1.  Your `iex` session should look something like this:
    ```elixir
    iex> name = "Potion of Invisibility"
    "Potion of Invisibility"
    iex> quantity_ml = 50
    50
    iex> cost = 199.99
    199.99
    iex> status = :complete
    :complete
    iex> is_volatile = false
    false
    ```

2.  The string interpolation should look like this:
    ```elixir
    iex> potion_label = "Label: #{name} (#{quantity_ml}ml). Status: #{status}. Cost: #{cost}"
    "Label: Potion of Invisibility (50ml). Status: complete. Cost: 199.99"
    ```
</details>

---

Excellent work. You are no longer just performing fleeting calculations; you are capturing, naming, and describing the very essence of your creations. You've mastered variables and the fundamental reagents of our craft.

But a single bottle can only hold a single essence. What happens when a potion requires a dozen ingredients? In our next lesson, we will explore the magical containers—Lists, Tuples, and Maps—that allow us to organize and work with collections of ingredients.
