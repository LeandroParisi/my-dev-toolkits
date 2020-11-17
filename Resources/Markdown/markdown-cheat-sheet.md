# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Quebra de linha
'escrever um parafrago em uma linha
'pular uma linha
'escrever outro p


### Heading

# H1
## H2
### H3

### Bold

**bold text**

### comment

[comment]: <> (This is a comment, it will not be included)

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Link do google drive

LINK GOOGLDE DRIVE IMAGES:

Step 3:

The copied shareable link will be in the following format

    https://drive.google.com/file/d/<ID of image>/view?usp=sharing

The format may change in the future but all we need to embed our image is the <ID of image> from URL. Once you have identified the ‘ID’ copy it.

Step 4:

Now that we have the ID we will use the following URL formate to embed the image

    https://drive.google.com/uc?id=<ID of image>

Replace the <ID of image> with your copied ID. This URL will be used in your markdown to embed the image.

Step 5:

Now the last step is to actually embed image in markdown. This can be done by either of the following 2 methods

### Video

Inserido como uma imagem misturada com link

Custom link: http://img.youtube.com/vi/{video-id}/0.jpg

[![Audi R8](http://img.youtube.com/vi/KOxbO0EI4MA/0.jpg)](https://www.youtube.com/watch?v=KOxbO0EI4MA "Audi R8")


[![Audi R8](http://img.youtube.com/vi/6pjCpDJ-420/0.jpg)](https://youtu.be/6pjCpDJ-420 "Audi R8")
### Image		

- ![alt text](image.jpg)
- Copy <img> in browser DevTools. Replace ![](url) to <img>. Add width(and height) attr.
	- <img src="https://camo.githubusercontent.com/..." data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" />

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
