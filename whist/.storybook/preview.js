import React from 'react';
import Backend from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import {addDecorator} from '@storybook/react';

addDecorator((storyFn) => (
  <DndProvider backend={Backend}>{storyFn()}</DndProvider>
));
