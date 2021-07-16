#!/usr/bin/python
import cgi
import os
import sys
sys.stderr = sys.stdout # Make sure we can see any errors

# Structure on the server:
#  This file:
#    psyc241.ucsd.edu/Turk/save.py
#  Data gets saved in:
#    psyc241.ucsd.edu/Turk/data/{experimentName}/
#  Each subject gets saved using their id:
#		 psyc241.ucsd.edu/Turk/data/{experimentName}/{id}.txt
#
# Note that this means that anybody can load this file directly and
# create files on your server. E.g., if somebody goes to the URL
# psyc241.ucsd.edu/Turk/save.py?id=hello&experimentName=tim&curData=you+da+bomb,
# that will create a file on the server in the directory tim. So it isn't the
# safest thing in the world. But I don't have any problems, and they can
# only create text files.
#
# How to make this file work:
#  You'll probably need to change the top line to be the address of python
#  on your server (it might be /usr/bin/python or /usr/local/bin/python).
#  You'll also need to chmod this file to 755.
#

try:
  # Read the id from the JSON and use as the filename:
  fs = cgi.FieldStorage()
  fName = "data/" + fs["experimenterName"].value + "/" + fs["experimentName"].value + "/" + fs["id"].value + ".txt"
  if not os.path.exists(os.path.dirname(fName)):
    os.makedirs(os.path.dirname(fName)) 
  saveFile = open(fName, "w")
  
  # Now read the field curData, which we will assume is a string
  # and print it to this file:
  saveFile.write(fs["curData"].value)
  
  # Close the file and tell jQuery all went well:
  saveFile.close()
  print "Status: 200 OK"
  print "Content-type: text/plain"
  print
  print fs["id"].value + " saved"
except:

  # Tell jQuery something went wrong
  print "Status: 400 Bad Request"
  print "Content-type: text/plain"
  print
  print "Error"



