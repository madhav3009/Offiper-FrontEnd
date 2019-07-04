import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import Button from '../../components/button/button';

storiesOf('Button', module)
  .add('button', () => (
   <Button/>
  ));
