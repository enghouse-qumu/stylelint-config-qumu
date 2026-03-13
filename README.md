# Stylelint configuration for Qumu

## Usage

To use our configuration, you first need to install the Enghouse Qumu rules.

```bash
npm i -D @qumu/stylelint-config-qumu
```

Once installed, create a `stylelint.config.mjs` file and add the following code:

```javascript
import config from '@qumu/stylelint-config-qumu';

export default {
  extends: [config],
};
```

## Linting your files

You can lint your files by running the following command:

```bash
npx stylelint "**/*.{css,scss}"
```

## Extending the configuration

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```javascript
import config from '@qumu/stylelint-config-qumu';

export default {
  extends: [config],
  rules: {
    indentation: 'tab',
    'number-leading-zero': null,
  },
};
```

## Table of Contents

1. [Terminology](#terminology)
1. [CSS](#css)
1. [Scss](#scss)

## Terminology

  <a name="terminology--rule-declaration"></a><a name="1.1"></a>
  - [1.1](#terminology--rule-declaration) **Rule declaration**: A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

  ```css
  .listing {
    font-size: 18px;
    line-height: 1.2;
  }
  ```

  <a name="terminology--selectors"></a><a name="1.2"></a>
  - [1.2](#terminology--selectors) **Selectors**: In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

  ```css
  .my-element-class {
    /* ... */
  }
  
  [aria-hidden] {
    /* ... */
  }
  ```

  <a name="terminology--properties"></a><a name="1.3"></a>
  - [1.3](#terminology--properties) **Properties**: Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

  ```css
  /* some selector */ {
    background: #f1f1f1;
    color: #333;
  }
  ```

**[⬆ back to top](#table-of-contents)**

## CSS

  <a name="css--indent"></a><a name="2.1"></a>
  - [2.1](#css--indent) **Indent**: Use soft tabs (2 spaces) for indentation. Use 4 spaces for continuous indentation.

  ```css
  /* bad */
  .myClass {
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 3px #fff,
        0 0 3px #ff0000;
  }

  /* good */
  .myClass {
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 
        0 0 3px #fff,
        0 0 3px #ff0000;
  }
  ```

  <a name="css--class-names"></a><a name="2.2"></a>
  - [2.2](#css--class-names) **Class names**: Prefer camelCasing in class names. Use BEM ([http://getbem.com/naming/](http://getbem.com/naming/)). Underscores are only acceptable when defining/specifying child elements. Dashes are only acceptable when defining/specifying modifiers.

  ```css
  /* bad */
  .my-super-class {}
  .MySuperClass {}
  .my_super_class {}
  .mySuperClass__MyElement {}
  .mySuperClass--MyModifier {}

  /* good */
  .mySuperClass {}
  .mySuperClass__myElement {}
  .mySuperClass--myModifier {}
  .mySuperClass__myElement--myModifier {}
  ```

  <a name="css--ids"></a><a name="2.3"></a>
  - [2.3](#css--ids) Do **NOT** use ID selectors.

  <a name="css--selectors-new-line"></a><a name="2.4"></a>
  - [2.4](#css--selectors-new-line) When using multiple selectors in a rule declaration, give each selector its own line.

  ```css
  /* bad */
  .myClass, .myOtherClass {}

  /* good */
  .myClass,
  .myOtherClass {}
  ```
  
  <a name="css--selectors-colon"></a><a name="2.4"></a>
  - [2.4](#css--selectors-colon) States selectors (:hover, :focus) are preceded of one colon, before/after pseudo selector (::before, ::after)  are preceded of two colons.
  
  ```css
  /* bad */
  .myClass:before {}
  
  /* good */
  .myClass:hover {}
  .myClass::before {}
  ```

  <a name="css--braces"></a><a name="2.6"></a>
  - [2.6](#css--braces) Put a space before the opening brace `{` in rule declarations. Put the closing brace `}` of rule declarations on a new line.

  ```css
  /* bad */
  .myClass{
    height: 10px; }

  /* good */
  .myClass {
    height: 10px;
  }
  ```

  <a name="css--colon"></a><a name="2.7"></a>
  - [2.7](#css--colon) In properties, put a space after, but not before, the `:` character.

  ```css
  /* bad */
  .myClass{
    height:10px; 
  }

  .myClass{
    height :10px; 
  }

  .myClass{
    height : 10px; 
  }

  /* good */
  .myClass {
    height: 10px;
  }
  ```

  <a name="css--one-property-per-line"></a><a name="2.8"></a>
  - [2.8](#css--one-property-per-line) Each property should be on its own line

  ```css
  /* bad */
  .myClass {
    border: 2px solid white; border-radius: 50%;
  }

  /* good */
  .myClass {
    border: 2px solid white;
    border-radius: 50%;
  }
  ```

  <a name="css--order"></a><a name="2.9"></a>
  - [2.9](#css--order) Order your properties in ascending order.

  ```css
  /* bad */
  .myClass {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  /* good */
  .myClass {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  ```

  <a name="css--colors"></a><a name="2.10"></a>
  - [2.10](#css--colors) Use `hex` for plain colors. Prefer `hex` over names for colors. Use `rgba` for transparent colors. Use the short notation as much as possible.

  ```css
  /* bad */
  .myClass {
    background: white;
  }

  .myClass {
    background: rgba(255, 255, 255, 1);
  }

  .myClass {
    background: #ffffff;
  }

  /* good */
  .myClass {
    background: #fff;
  }

  .myClass {
    background: rgba(255, 255, 255, .5);
  }
  ```

  <a name="css--units"></a><a name="2.11"></a>
  - [2.11](#css--units) Whenever possible, use a unit-less value. Do not define a unit when the value is `0`. Define the unit using lowercase.

  ```css
  /* bad */
  .myClass {
    height: 10PX;
    line-height: 21px;
    padding: 0px;
  }

  /* good */
  .myClass {
    height: 10px;
    line-height: 1.5;
    padding: 0;
  }
  ```

  <a name="css--numbers"></a><a name="2.12"></a>
  - [2.12](#css--numbers) Remove leading and trailing zeros from numbers.

  ```css
  /* bad */
  .myClass {
    height: 010px;
    padding: 0.20px;
  }

  /* good */
  .myClass {
    height: 10px;
    padding: .2px;
  }
  ```

  <a name="css--comments"></a><a name="2.13"></a>
  - [2.13](#css--comments) Place comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

  ```css
  /* bad */
  .myClass {
    right: 0; /* this is a comment */
    top: 0; /* this is a another comment */
  }

  /* good */
  .myClass {
    /* this is a comment */
    right: 0;

    /* this is a another comment */
    top: 0;
  }
  ```

## SCSS

  <a name="scss--syntax"></a><a name="3.1"></a>
  - [3.1](#scss--syntax) Use the `.scss` syntax, never the original `.sass` syntax.

  <a name="scss--variable-names"></a><a name="3.2"></a>
  - [3.2](#scss--variable-names) Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

  <a name="scss--mixins"></a><a name="3.3"></a>
  - [3.3](#scss--mixins) Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

  <a name="scss--extends"></a><a name="3.4"></a>
  - [3.4](#scss--extends) `@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

  <a name="scss--nested-selectors"></a><a name="3.5"></a>
  - [3.5](#scss--nested-selectors) Do not nest selectors more than three levels deep!

  ```scss
  .page-container {
    .content {
      .profile {
        // STOP!
      }
    }
  }
  ```

  <a name="scss--comments"></a><a name="3.6"></a>
  - [3.6](#scss--comments) Prefer line comments (`//`) to block comments.

**[⬆ back to top](#table-of-contents)**
