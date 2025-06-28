---
title: "Lesson 3: Containers for Your Ingredients"
date: "2023-01-03"
---
## Lesson 3: Containers for Your Ingredients

Greetings, Alchemist. In our previous session, you mastered the art of bottling single essences. You learned to give a name to a number, a status, or a descriptive string. This is a vital skill, but a complex potion is never made from a single ingredient.

A real recipe calls for a list of reagents, a set of instructions, and structured data about the final product. Storing `ingredient1 = "mandrake"`, `ingredient2 = "phoenix feather"`, `ingredient3 = "newt's eye"` is clumsy and inflexible. What if a potion needs twenty ingredients? Or only two?

We need better containers. We need satchels to hold our reagents, sealed phials to present our results, and recipe cards to hold complex information. In Elixir, these three containers are called **Lists**, **Tuples**, and **Maps**. Understanding when to use each one is a mark of a true alchemist.

Return to your `iex` cauldron, and let's start organizing our lab.

### 3.1 The Potion Satchel: Using Lists

Imagine a simple leather satchel. You drop ingredients into it one by one. The first one in goes to the bottom, the last one in stays at the top. The order matters, and it's designed to hold a collection of similar things—in our case, a list of potion ingredients. This is a **List**.

In Elixir, we create lists with square brackets `[]`, separating each item with a comma.

```elixir
iex(1)> ingredients = ["mandrake root", "phoenix feather", "unicorn horn"]
["mandrake root", "phoenix feather", "unicorn horn"]
```

Lists are the workhorse collection type in Elixir. They are perfect for holding an ordered sequence of items, especially when the items are all of the same type.

Elixir gives us simple spells for peeking inside our satchel. The `hd()` function shows you the "head" of the list (the first item), and the `tl()` function shows you the "tail" (the rest of the list).

```elixir
iex(2)> hd(ingredients)
"mandrake root"

iex(3)> tl(ingredients)
["phoenix feather", "unicorn horn"]
```
This head-and-tail structure is fundamental to how Elixir works with lists, and we will build upon this concept in a big way very soon. For now, remember this: **Use a List when the order of items matters and you have a collection of similar things.**

### 3.2 The Sealed Phial: Using Tuples

Now, imagine a different container: a small, sealed glass phial. You use it to present the final, unchangeable result of an experiment. It might contain two distinct things: a label indicating success or failure, and the result itself. You can't add or remove things from this phial once it's sealed. This is a **Tuple**.

We create tuples with curly braces `{}`.

By convention in Elixir, tuples are the perfect way to return a value from a function, indicating whether the operation succeeded or failed. We use the atom `:ok` for success and `:error` for failure as the first element.

```elixir
iex(4)> successful_brew = {:ok, "Bubbling Green Potion"}
{:ok, "Bubbling Green Potion"}

iex(5)> failed_brew = {:error, "Cauldron temperature too low"}
{:error, "Cauldron temperature too low"}
```
Notice how the items inside the tuple are related, but they are of *different types* (`:ok` is an atom, `"Bubbling Green Potion"` is a string). This is a key difference from lists. Tuples are stored very efficiently in memory, making them ideal for these fixed-size, structured data packets.

Remember this rule: **Use a Tuple when you need to group a fixed number of related items together, especially as a return value from a function.** You don't "add" to a tuple; you create it whole.

### 3.3 The Recipe Card: Using Maps

Our satchel holds ingredients in order, and our phial holds a fixed result. But where do we store the recipe itself? A recipe has different pieces of information, each with its own label: a name, a difficulty rating, a primary element, etc. The order we write these down doesn't really matter, as long as the labels are correct. For this, we need a **Map**.

A map is a collection of key-value pairs. Think of it as a recipe card or a dictionary. We create maps using the `%{}` syntax.

```elixir
iex(6)> recipe = %{"name" => "Potion of Strength", "difficulty" => 7, "requires_moonlight" => true}
%{"difficulty" => 7, "name" => "Potion of Strength", "requires_moonlight" => true}
```
Notice that `iex` may print the keys back in a different order! This is because, unlike a list, a map is inherently **unordered**. What matters is the connection between the key (e.g., `"name"`) and its value (e.g., `"Potion of Strength"`).

To retrieve a value, we use square brackets, similar to lists, but we provide the key.

```elixir
iex(7)> recipe["name"]
"Potion of Strength"
```

### 3.4 A Dash of Syntactic Sugar: Using Atoms as Keys

In the Elixir community, it's far more common (and efficient) to use atoms as keys instead of strings. The syntax is very similar:

```elixir
iex(8)> recipe_with_atoms = %{:name => "Potion of Strength", :difficulty => 7}
%{difficulty: 7, name: "Potion of Strength"}
```

Wait, look at how `iex` printed that back! `%{difficulty: 7, name: "Potion of Strength"}`.

This is a beautiful piece of "syntactic sugar"—a shorthand to make the alchemist's life easier. When your map's keys are atoms, you can write them as `key: value` instead of `:key => value`. It's cleaner and the preferred way to write maps.

Let's rewrite our recipe card using this superior syntax.

```elixir
iex(9)> recipe = %{name: "Potion of Strength", difficulty: 7, requires_moonlight: true}
%{difficulty: 7, name: "Potion of Strength", requires_moonlight: true}
```
Even better, when using atom keys, you can access the values using a clean dot notation:

```elixir
iex(10)> recipe.name
"Potion of Strength"

iex(11)> recipe.difficulty
7
```
This is elegant and easy to read. Remember this guideline: **Use a Map when you have a set of labeled data where each value has a specific key.** And whenever possible, use atoms for your keys.

---

### Lesson 3: Exercises

Let's test your knowledge of these essential containers.

1.  **List of Instructions:** A certain brewing process must be followed in an exact order. Create a list named `brewing_steps` that contains the following instructions as strings, in this specific order: `"grind ingredients"`, `"add to cauldron"`, `"stir clockwise 10 times"`, `"heat to 200 degrees"`, `"let cool"`.

2.  **Reagent Data:** A "Phoenix Feather" has several important attributes. Create a map named `phoenix_feather` with the following key-value pairs (use atom keys!):
    *   `name`: `"Phoenix Feather"`
    *   `potency`: `95`
    *   `is_rare`: `true`
    *   `element`: `:fire`

3.  **Purity Test:** You've just performed a purity test on a sample of water. The test result needs to be packaged up. Create a tuple named `test_result` that contains three elements: the atom `:ok`, the string `"purity above 99%"`, and the number `99.4`.

---
<details>
<summary>Solutions</summary>

1.  ```elixir
    iex> brewing_steps = ["grind ingredients", "add to cauldron", "stir clockwise 10 times", "heat to 200 degrees", "let cool"]
    ```

2.  ```elixir
    iex> phoenix_feather = %{name: "Phoenix Feather", potency: 95, is_rare: true, element: :fire}
    ```

3.  ```elixir
    iex> test_result = {:ok, "purity above 99%", 99.4}
    ```
</details>

---

You have now organized your laboratory. You have a satchel (List) for ordered ingredients, a recipe card (Map) for structured data, and a sealed phial (Tuple) for final results. These three containers are the foundation upon which all complex potions are built.

But now that we have these containers, how do we elegantly get the contents back *out*? How can we unpack our tuples, read our maps, and process our lists in a way that is both safe and expressive?

For that, we need to learn the single most powerful spell in the Elixir Alchemist's grimoire: **Pattern Matching**. And that is the subject of our next lesson.
