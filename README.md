# Guid Handling
a small simple **javascript** package that handle simple **GUID** operations.

## Installation
```javascript
npm i @zaidkindman/guid-handling
```
## Example
```javascript
import { Guid } from "@zaidkindman/guid-handling"

//empty guid
console.log('Empty Guid: ', Guid.Empty);

//generate new guid
var newGuid = Guid.NewGuid();
console.log('New Guid:', newGuid);

//check if string is valid guid 
console.log('Valid Guid: ', Guid.IsValid(newGuid));
console.log('invalid Guid: ', Guid.IsValid('NotValid'));
```

| API | Action |
|--|--|
| Guid.Empty |returns empty guid  |
|Guid.NewGuid()|static function that generate new guid|
|Guid.IsValid(guid)|static function that checks guid validation|
