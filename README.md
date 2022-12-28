# Guid Handling
a small simple **javascript** package that handle simple **GUID** operations.

## Installation
```javascript
npm i @zaidkindman/guid-handling
```
## Example
```javascript
import { Guid } from "@zaidkindman/guid-handling"
console.log(Guid.Empty);
```

| API | Action |
|--|--|
| Guid.Empty |returns empty guid  |
|Guid.NewGuid()|static function that generate new guid|
|Guid.IsValid(guid)|static function that checks guid validation|
