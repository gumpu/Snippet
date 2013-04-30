#!/usr/bin/env python

import zmq
import time
from dummy import Dummy

context = zmq.Context(1)

command_socket  = context.socket( zmq.PUB )
command_socket.bind( "tcp://*:9001" )

dummy = Dummy()
dummy.a_hash['foo']='bar'
dummy.a_hash[12]='12bar'

while True :
    time.sleep(1)
    command_socket.send_pyobj( dummy )
    print "Awake"

