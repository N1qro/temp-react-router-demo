import requests

endpointGET = "http://127.0.0.1:8000/api"
endpointPOST = "http://127.0.0.1:8000/api/submit/"

response = requests.get(endpoint, data="damn")
print(response.json())