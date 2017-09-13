db.restaurants.find({"grades": {$elemMatch:{"score":{ $gte:80}}}})
db.restaurants.find({"grades": {$elemMatch:{"score":{ $gt:80, $lt:100}}}}).pretty();
db.restaurants.find({"address.coord.0":{$lt: -95.754168}}).pretty();