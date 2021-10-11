import socket
import threading


nickname = input("Choose your nickname: ")
ter = '$kickme'

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 9999 ))


def receive():
    while True:
        try:
            
            message = client.recv(1024).decode('ascii')
            
            if message == 'NICK':
                client.send(nickname.encode('ascii'))
             

            else:
                print(message)
        except:
           
            print("Connection Closed!")
            client.close()    
             

def write():
    while True:
        message = "{}:{}".format(nickname,input(''))
        if message == "{}:{}".format(nickname,'$help'):
            print("$infome ---- YOUR NICKNAME AND IP")
            print('$muteme ---- MUTE YOURSELF FROM CONVO')

        if message == "{}:{}".format(nickname,'$infome'):
            print('NICKNAME : ', nickname)
            print('IP : 127.0.0.1')
            
        if message == "{}:{}".format(nickname,'$muteme'):
            print('SHH... YOU ARE MUTED NOW')
            break
        
        client.send(message.encode('ascii'))

   
receive_thread = threading.Thread(target=receive)
receive_thread.start()

write_thread = threading.Thread(target=write)
write_thread.start()

