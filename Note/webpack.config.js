let path = require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","note"),
        filename:"note.js"
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            loader:`file-loader`,
          },
        ],
      },

}