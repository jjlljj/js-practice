## Game Map Generator

We're going to generate a 2-dimensional dungeon map for a game.

PART ONE:

Write a method that takes in a parameter `size` which builds and returns a two-dimensional square grid where each side of the grid is `size` cells.

Next, your method should populate the dungeon with one of four markers:
- `M` indicates a monster
- `t` indicates treasure
- `#` indicates a rock pile
- `_` indicates empty space

All markers on the map should have an approximately equal chance of appearing on the map.

We want to avoid an overrun of monsters in our game world. Your map should not contain any cells where a monster exists in any cells around another monster. (including diagonally)

Output of the map should look something like this, depending on your programming language, where `size` is 4:
(basically, find a way to visually represent the map)

```
['M','t','#','M']
['t','#','_','t']
['_','#','_','M']
['#','M','t','_']
```

---

PART TWO:

Make your map 3-dimensional, with the same restrictions. The `size` attribute will also indicate the depth of your dungeon as well.

Your player will need a way to travel to/from other layers, so you will need to introduce the idea of stairs to your dungeon. Use a `d` to mark where steps will go down to the next level, and a `u` to mark stairs going back up to the previous level. The first dungeon level should not have stairs going up, nor should the bottom level need stairs going further down.

Wherever you choose to place your downward-facing stairs, the same x,y coordinates on the level below will be where you will place your upward-facing stairs. For example, if your downward (`d`) stairs are at position (0,3) on one level, then (0,3) of the next lower level must have upward (`u`) stairs at the same position (0,3).

You do NOT need to avoid monster adjacency on other levels of the dungeon. For example, if you have a monster on one level at position (4,5) there's no "adjancency" of that position at other levels, so (4,5) on a previous or next level can also have a monster.

Your output should show each individual level of the map. For example, if `size` is 4:

```
floor 0
['_', '_', '_', 'M']
['#', '_', '#', '_']
['#', 't', '-', 'd']
['M', '_', 'M', '_']

floor 1
['t', '#', '_', 'M']
['t', 't', 'd', '#']
['M', '#', 't', 'u']
['t', '#', '_', 't']

floor 2
['_', 'M', '_', '#']
['#', '_', 'u', 't']
['_', 'd', 't', 'M']
['_', '_', 't', '_']

floor 3
['#', '#', 't', 'M']
['t', '#', 't', 't']
['t', 'u', 'M', 't']
['_', '_', 't', 't']
```
