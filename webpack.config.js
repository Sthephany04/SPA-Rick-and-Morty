const path = require('path');  //permite acceder donde nos estemos moviendo en el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //nos permite trabajar con html

module.exports = {
  entry: './src/index.js',    //archivo de entrada, todo codigo inicial
  output: {                  //donde vamos a poner el proyecto estructurado, compilado y listo para produccion
    path: path.resolve(__dirname, 'dist'),  
    filename: 'main.js'      //nombre del archivo a generar, el que sale a produccion
  },
  resolve: {                 //extensiones del proyecto
    extensions: ['.js'],     
  },
  module: {                  //reglas necesarias con las que se empieza a trabajar
    rules: [                 //reglas por medio de un arreglo
      {
        test: /\.js?$/,      
        exclude: /node.modules/,  
        use: {
          loader: 'babel-loader',  //configuracion para trabajar todo el codigo
        }
      }
    ]
  },
  plugins: [                
    new HtmlWebpackPlugin([   //permite trabajar con los archivos html
      {
        inject: true,         //como inyectar un valor al archivo html
        template: './public/index.html',
        filename: './index.html',
      }
    ])
  ]
}