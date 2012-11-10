$__defineProps(this, {
  Math: $__MathCreate(),
  StopIteration: $__StopIteration,
  clearInterval(id){
    id = $__ToInteger(id);
    $__ClearTimer(id);
  },
  clearTimeout(id){
    id = $__ToInteger(id);
    $__ClearTimer(id);
  },
  decodeURI: $__decodeURI,
  decodeURIComponent: $__decodeURIComponent,
  encodeURI: $__encodeURI,
  encodeURIComponent: $__encodeURIComponent,
  escape: $__escape,
  eval: $__eval,
  isFinite(number){
    number = $__ToNumber(number);
    return number === number && number !== Infinity && number !== -Infinity;
  },
  isNaN(number){
    number = $__ToNumber(number);
    return number !== number;
  },
  parseInt: $__parseInt,
  parseFloat: $__parseFloat,
  setInterval(callback, milliseconds){
    milliseconds = $__ToInteger(milliseconds);
    if (typeof callback !== 'function') {
      callback = $__ToString(callback);
    }
    return $__SetTimer(callback, milliseconds, true);
  },
  setTimeout(callback, milliseconds){
    milliseconds = $__ToInteger(milliseconds);
    if (typeof callback !== 'function') {
      callback = $__ToString(callback);
    }
    return $__SetTimer(callback, milliseconds, false);
  },
  stdout: {
    write(text, color){
      $__Signal('write', [text, color]);
    },
    clear(){
      $__Signal('clear');
    },
    backspace(count){
      $__Signal('backspace', $_ToInteger(count));
    }
  },
  require(request){
    var src;
    $__Fetch(request, result => src = result);
    if (typeof src === 'string') {
      return $__EvaluateModule(src, global, request);
    } else {
      return src;
    }
  }
});


