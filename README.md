# NMEA_Converter
## Project Description
NMEA_Converter is a fully open-source Web-App project which works as a translater. </br>
You just have to enter an NMEA Frame and NMEA_Converter gives you :
- The NMEA Frame type
- The time when the Frame was sent
- The latitude
- The longitude
- An embedded map where the NMEA Frame came from

The technologies I used in this project are :
- Python
- JavaScript
- HTML5
- CSS3

The libraries I used in this project are :
- Flask
- Leafletjs
- Pynmeagps
## How to Install and Run NMEA_Converter
Here are few steps you have to complete to install and run NMEA_Converter

**Step 0 :** Open your favorite terminal

**Step 1 :** Clone the repository

```
$ git clone https://github.com/Arkeon34/NMEA_Converter
```

**Step 2 :** Create a python virtual environment

```
$ cd NMEA_Converter
$ python -m venv venv-name
```

**Step 3:** Run the virtual environment
```
# Windows PowerShell
$ venv-name\Scripts\activate.ps1

# Linux terminal (bash)
$ source venv-name/bin/activate
```

**Step 4:** Install the dependencies
```
$ pip install -r requirements.txt
```
Now you are ready to go !

## How to run the project ?
The project is quite simple at the moment. </br>
To set the Flask environment, simply run the following commands :

```
# Windows PowerShell
$env:FLASK_APP = "main"

# Linux terminal (bash)
$ export FLASK_APP=main
```
Then, you just need to run the Flask environment :
```
$ flask run
```
The Flask server will run at this address: http://127.0.0.1:5000/

## Final result
![nmea](https://user-images.githubusercontent.com/94650900/153483366-167b1869-677d-40ba-9688-7bc6c12826f6.png)
![nmea_2](https://user-images.githubusercontent.com/94650900/153484778-bd09e247-13db-4212-b871-619b44c11b47.png)


