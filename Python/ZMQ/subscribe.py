#!/usr/bin/env python

import zmq
from dummy import Dummy

context = zmq.Context(1)

command_socket  = context.socket( zmq.SUB )
command_socket.connect( "tcp://localhost:9001" )
command_socket.setsockopt( zmq.SUBSCRIBE, "" )

poller = zmq.Poller()
poller.register( command_socket, zmq.POLLIN )

while True :
    socks = dict( poller.poll( 60000 ) )
    if command_socket in socks and socks[ command_socket ] == zmq.POLLIN:
        dummy = command_socket.recv_pyobj()
        print str(dummy)
        for key in dummy.a_hash :
            print key, dummy.a_hash[ key ]

