import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    // background-color: #F2F6D0;
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'lightsteelblue',
    // background-image: url('http://hdw.datawallpaper.com/architecture/vintage-new-york-city-299988.jpg');
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'WebkitBackgroundBlendMode': 'overlay',
    'MozBackgroundBlendMode': 'overlay',
    'backgroundBlendMode': 'overlay'
  },
  '#wrapper': {
    'width': [{ 'unit': 'px', 'value': 960 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.05 }]
  },
  'col-md-4': {
    'height': [{ 'unit': 'px', 'value': 250 }],
    'marginBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'title': {
    'textAlign': 'center'
  },
  '#articles': {
    // float: left;
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'display': 'inline-block',
    'overflow': 'auto'
  },
  '#notes': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'float': 'right'
  }
});
