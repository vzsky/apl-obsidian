# APL Code for obsidian

*render apl nicely*

APL is a programing language, litterally.

TLDR; this plugin render the tick notation like this
```
(+/`-`")`j`i 100
```
into this
```
(+/÷≢)∘⍳ 100
```
using the RIDE convention.

# Examples
by writing the tick symbol following a character, it renders the corresponding apl unicode.
like this *average function*

<img width="725" alt="Screenshot 2566-07-20 at 14 13 07" src="https://github.com/vzsky/apl-obsidian/assets/20735983/a62aad3b-f7df-4a97-9253-0598f87d0ed2">

or the *variance function*

<img width="718" alt="Screenshot 2566-07-20 at 14 24 42" src="https://github.com/vzsky/apl-obsidian/assets/20735983/bf34abb5-f7e2-4cec-96f7-00596effebde">

it can also render box. but it should be manually drawn, or copied from RIDE.

<img width="727" alt="Screenshot 2566-07-20 at 14 12 54" src="https://github.com/vzsky/apl-obsidian/assets/20735983/ffa6c188-bac2-4153-a9c3-f5600e65c83e">
<img width="731" alt="Screenshot 2566-07-20 at 14 12 59" src="https://github.com/vzsky/apl-obsidian/assets/20735983/a3021abd-2c78-4b5f-9449-ccff382634cf">

# Installation

Apart from the plugin, you need to separately install the APL385 font. This is not required for unicode rendering, but it will look ugly without it.
