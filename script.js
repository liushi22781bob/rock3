var elementContainer = $("#generated-element-container")

$("#make-red-element").click(function() {  
  var newElement = $("<div>Hello!</div>")
  newElement.css({background: "red"})

  elementContainer.append(newElement)
})

$("#make-green-element").click(function() {  
  var newElement = $("<div>Hi!</div>")
  newElement.css({background: "green"})

  elementContainer.append(newElement)
})

$("#blink-background").click(function() {
  $("body").css({"background": "green"})
})