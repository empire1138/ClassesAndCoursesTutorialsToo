CLIENT_ID = 'YAUcCXZ5Wwfq'
SECRET_KEY = 'usuaisubisbsoin998'

import requests 

auth = requests.auth.HTTPBasicAuth(CLIENT_ID, SECRET_KEY)

with open('pw.txt', r) as f:
    pw = f.read()

data = {
    'grant_type': 'password',
    'username': 'jamescalm',
    'password': pw
}

headers = {'User-Agent' : 'MyAPi/0.0.1'}

res= requests.post('https://reddit.com/api/v1.access_toekn' ,
                    auth = auth, data= data, headers=headers)
        
TOKEN = res.json()['access_token']