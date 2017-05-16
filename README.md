# react-docgen-typescript

[![Build Status](https://travis-ci.org/styleguidist/react-docgen-typescript.svg)](https://travis-ci.org/styleguidist/react-docgen-typescript)

![](https://nodei.co/npm/react-docgen-typescript.png?downloadRank=true&downloads=true)

A simple parser for React properties defined in TypeScript instead of propTypes. 

It can be used with [React Styleguidist](https://github.com/styleguidist/react-styleguidist).

## Installation 

```
npm install --save-dev react-docgen-typescript
```

## React Styleguidist integration

Include following line in your `styleguide.config.js`:

```javascript
propsParser: require('react-docgen-typescript').parse
```

## Example

In the example folder you can see React Styleguidist integration.

The component [`Column.tsx`](./examples/react-styleguidist-example/components/Column.tsx)

```javascript
import * as React from 'react';
import { Component } from 'react';

/**
 * Column properties.
 */
export interface IColumnProps {
    /** prop1 description */
    prop1?: string;
    /** prop2 description */
    prop2: number;
    /** 
     * prop3 description 
     */
    prop3: () => void;
    /** prop4 description */
    prop4: 'option1' | 'option2' | 'option3';
}

/**
 * Form column.
 */
export class Column extends Component<IColumnProps, {}> {
    render() {
        return <div>Test</div>;
    }
}
```

Will generate the following stylesheet:

![Stylesheet example](./stylesheet-example-column.png "Stylesheet example")

The functional component [`Grid.tsx`](./examples/react-styleguidist-example/components/Grid.tsx)

```javascript
import * as React from 'react';

/**
 * Grid properties.
 */
export interface IGridProps {
    /** prop1 description */
    prop1?: string;
    /** prop2 description */
    prop2: number;
    /**
     * prop3 description
     */
    prop3: () => void;
    /** Working grid description */
    prop4: 'option1' | 'option2' | 'option3';
}

/**
 * Form Grid.
 */
export const Grid = (props: IGridProps) => {
    const smaller = () => {return;};
    return <div>Grid</div>;
};
```

Will generate the following stylesheet:

![Stylesheet example](./stylesheet-example-grid.png "Stylesheet example")

## Thanks to contributors

@JocD Jacques Dukes - complete support for functional components and much more

@sapegin Artem Sapegin - fix for compatibility with react-styleguidist v5

@diegolanda Diego - support for different kinds of components

## Thanks to others

The integration with React Styleguidist wouldn't be possible without [Vyacheslav Slinko](https://github.com/vslinko) pull request [#118](https://github.com/styleguidist/react-styleguidist/pull/118) at React Styleguidist.
