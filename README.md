  
import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from 'src/components/atoms'
import {
  styled,
  AccordionProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
  fade
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

const StyledPrimaryAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  '&.Mui-expanded': {
    margin: 0
  },
  '&.MuiAccordion-rounded': {
    borderRadius: 0
  }
}))

const StyledPrimaryAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: '0 16px',
  '&.Mui-expanded': {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    minHeight: '48px',
    padding: '0 16px'
  },
  '&.Mui-focused': {
    backgroundColor: fade(theme.palette.secondary.main, 0.1)
  },
  '& .MuiAccordionSummary-content': {
    margin: '0',
    '&.Mui-expanded': {
      margin: '0'
    }
  },
  '& .MuiAccordionSummary-expandIcon': {
    color: theme.palette.secondary.main
  }
}))

const StyledPrimaryAccordionDetails = styled(AccordionDetails)({
  padding: '8px 16px'
})

const StyledSecondaryAccordion = styled(Accordion)(({ theme }) => ({
  overflow: 'hidden',
  '&:before': {
    backgroundColor: 'transparent'
  },
  '&.Mui-expanded': {
    margin: '0'
  },
  '&.MuiAccordion-rounded': {
    borderRadius: theme.shape.borderRadius
  }
}))

const StyledSecondaryAccordionSummary = styled(AccordionSummary)(
  ({ theme }) => ({
    backgroundColor: theme.palette.grey[300],
    '&.Mui-expanded': {
      minHeight: '48px'
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.grey[400]
    },
    '& .MuiAccordionSummary-content': {
      '&.Mui-expanded': {
        margin: '12px 0'
      }
    }
  })
)

const StyledSecondaryAccordionDetails = styled(AccordionDetails)({
  padding: '16px'
})

export const PrimaryPanel: React.FC<AccordionProps> = ({
  children,
  ...props
}) => {
  return <StyledPrimaryAccordion {...props}>{children}</StyledPrimaryAccordion>
}

export const PrimaryPanelSummary: React.FC<AccordionSummaryProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledPrimaryAccordionSummary expandIcon={<ExpandMore />} {...props}>
      {children}
    </StyledPrimaryAccordionSummary>
  )
}

export const PrimaryPanelDetails: React.FC<AccordionDetailsProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledPrimaryAccordionDetails {...props}>
      {children}
    </StyledPrimaryAccordionDetails>
  )
}

export const SecondaryPanel: React.FC<AccordionProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledSecondaryAccordion {...props}>{children}</StyledSecondaryAccordion>
  )
}

export const SecondaryPanelSummary: React.FC<AccordionSummaryProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledSecondaryAccordionSummary expandIcon={<ExpandMore />} {...props}>
      {children}
    </StyledSecondaryAccordionSummary>
  )
}

export const SecondaryPanelDetails: React.FC<AccordionDetailsProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledSecondaryAccordionDetails {...props}>
      {children}
    </StyledSecondaryAccordionDetails>
  )
}
  <h1 align="center">
  Front Basic - Avaliação Squid
</h1>

<a align="center" href="./CHANGELOG.md">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
</a>

<a align="center" href="https://travis-ci.com/github/DanielFerrariR/front-basic">
  <img src="https://travis-ci.com/DanielFerrariR/front-basic.svg?branch=master" />
</a>

This application was overengineered to show how to properly create a high quality react project with webpack. It could be improved with:

- Tests (Jest/Cypress)
- Webpack optimizations to properly pass lighthouse tests (manifest.json, robot.txt, minify, etc.).

I can also show how to properly structure these missing topics.

## TOC

- [Workspace](#workspace)
- [Configuration](#configuration)
- [Tests](#tests)
- [CI Configuration](#ci-configuration)
- [Deploy](#deploy)
- [Website](#website)

## Workspace

- Visual Studio Code 1.45.1

  - VSCode extensions:

    - Prettier - Code formatter 4.7.0
    - Eslint 2.1.5
    - VSCode MDX 0.1.4

  - VSCode settings:

  ```sh
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    },
    "javascript.validate.enable": false,
    "eslint.validate": ["markdown", "md", "mdx"],
    "prettier.requireConfig": true,
  }
  ```

## Configuration

1. **Install these packages (prefer the listed versions):**

- yarn 1.21.1
- npm 6.13.4
- node 12.16.1

2. **Create a .env file with the required variables:**

```sh
API_ADDRESS=https://vision.squidit.com.br/v1/feed/test
```

3. **Install all dependencies with yarn (not npm!!)**

```sh
yarn
```

4. **Start the webpack-dev-server**

```sh
yarn dev
```

5. **Commands**

```bash
# Installs all dependendies
$ yarn

# Runs for web production (needs yarn build first)
$ yarn start

# Runs for web development
$ yarn dev

# Builds for web (compiled to dist)
$ yarn build

# Checks Eslint errors
$ yarn lint

# Formats all files with prettier
$ yarn format

# Checks if all files are formatted with prettier
$ yarn check-format

# Checks typescript errors
$ yarn check-types

# CI validation command
$ yarn setup

# Storybook
$ yarn storybook

# Commits with karma interface
$ yarn commit
```

## Tests

- It was just a page, but could use Cypress/Jest if it was a bigger application.

## CI configuration

- Set the environment variable API_ADDRESS (in the CI environment variable section) with the server address.
- The only command needed to be put on CI is 'yarn setup' which tests formatting with prettier, eslint errors, typescript errors and build errors.

## Deploy

1. First, be sure you did everything from the configuration section (steps 1 to 4 are the most important ones).
2. 'yarn build' command will compile all files and put them into dist folder.
3. Install Apache. (I'm using XAMPP for this example. Link: <https://www.apachefriends.org/download.html>)
4. Clean up htdocs folder of xampp/htdocs.
5. Put all files from dist folder into xampp/htdocs folder.
6. Open XAMPP and, on the line of module apache, click on the 'Start' button.
7. Access 'localhost' from your browser and see that the page loads correctly. It will still not work if you try to access a route manually (like 'localhost/login'). See below how to fix it.

- For react router works correctly, you need to create a file '.htaccess' in the root of htdocs directory. Put this info there:

```bash
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Website

<https://brave-colden-2cf755.netlify.app>
