
## Set up

1. Create config file
	1. Copy config-template.js to config.js
	2. Put you Google Maps Directions API key in config.js
2. Build docker image and start the containers
	- `npm run deploy`
3. Set up database
	- `npm run init`
4. The container can be access through localhost:3000

## Test cases

Two points
```
[
	["22.372081", "114.107877"],
	["22.326442", "114.167811"]
]
```

Three points
```
[
	["22.372081", "114.107877"],
	["22.284419", "114.159510"],
	["22.326442", "114.167811"]
]
```

Four points
```
[
	["40.768139", "-73.958889"],
	["40.768138", "-73.958885"],
	["40.763742", "-73.962089"],
	["40.761874", "-73.963439"]
]
```

Four points different order
```
[
	["40.768139", "-73.958889"],
	["40.761874", "-73.963439"],
	["40.763742", "-73.962089"],
	["40.768138", "-73.958885"]
]
```

Four points different order
```
[
	["40.768139", "-73.958889"],
	["40.763742", "-73.962089"],
	["40.761874", "-73.963439"],
	["40.768138", "-73.958885"]
]
```

No route
```
[
	["22.372081", "114.107877"],
	["25.051948", "121.540504"]
]
```