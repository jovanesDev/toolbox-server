# ToolBox Backend Challange

The default port for the server is **localhost:8080**

Starting the Server

 * Via npm::
  1. In the project root directory (where the package.json file is located), run the command ** npm install ** 

  1. Once the download is finished, you can start the server using the command **npm run start ** 

  1. If you want to start it in development mode, run the command ** npm run dev ** 
 
> ### Endpoints

*  'http://localhost:8080/api/files/list'
> Returns the names of all files with the following structure
* {
    "files": [
        "test1.csv",
        "test2.csv",
        "test3.csv",
        "test18.csv",
        "test4.csv",
        "test5.csv",
        "test6.csv",
        "test9.csv",
        "test15.csv"
    ]
}

*  'http://localhost:8080/api/files/data'
> Returns files with their attributes: **text**, **number**, and **hex**, with the following structure:
 
* [
    {
        "file": "test2.csv",
        "lines": [
            {
                "text": "OtwUUFLkQYUjacTAOnVEEmrL",
                "number": "91753",
                "hex": "f4f53bf20d304eeef7f84115856c59b1"
            }
        ]
    },
    {
        "file": "test3.csv",
        "lines": [
            {
                "text": "vREznUcTjXqwMdWnXbEyhpEMzmCfJxjl",
                "number": "9727663",
                "hex": "c399a2236400facb1591e9434621592a"
            },
            {
                "text": "lnnJ",
                "number": "3702652",
                "hex": "fe756a1b77d9e3451c90bca1bf69985e"
            },
            {
                "text": "YsSwwHWixiMBDVLjpAtN",
                "number": "60",             "hex":"ecf982d4149d576797615a3f7fb91fd3"
            }
             ...
        ]
    },
]
* For this URL you can send `queryparams` to , with this way  
* http://localhost:8080/api/files/data?fileName="name of file"

    ### Steps to Start the Server with Docker

1. Ensure that Docker is installed: https://www.docker.com/
2. In the project root directory, run the command `docker-compose build`.
3. Run the command `docker-compose up`.
 