function triangle(val1 = 3, type1 = "leg", val2 = 4, type2 = "leg") {
    const validTypes = [
      "leg",
      "hypotenuse",
      "adjacent angle",
      "opposite angle",
      "angle",
    ];

    const isValidType = (type) => validTypes.includes(type);
    const isValidValue = (val) => val > 0 && typeof val === "number";
    const toDegrees = (angle) => angle * (180 / Math.PI);
    const toRadians = (angle) => angle * (Math.PI / 180);

    let a, b, c, alpha, beta;

    if (!isValidType(type1) || !isValidType(type2)) {
        console.log(
          "Invalid types"
        );
        return "failed";
    }

    if (!isValidValue(val1) || !isValidValue(val2)) {
        return "Invalid values";
    }    

    if (type1 === "hypotenuse" && type2 === "hypotenuse") {
        console.log(
          "Invalid input - 2 hypotenuses"
        );
        return "failed";
    }

    switch (type1) {
        case "leg":
            a = val1;
            switch (type2) {
                case "hypotenuse":
                    c = val2;
                    b = Math.sqrt(c * c - a * a);
                    alpha = toDegrees(Math.asin(a / c));
                    beta = 90 - alpha;
                    break;
                case "leg":
                    b = val2;
                    c = Math.sqrt(a * a + b * b);
                    alpha = toDegrees(Math.asin(a / c));
                    beta = 90 - alpha;
                    break;
                case "adjacent angle":
                    beta = val2;
                    alpha = 90 - beta;
                    c = a / Math.cos(toRadians(beta));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "opposite angle":
                    alpha = val2;
                    beta = 90 - alpha;
                    c = a / Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Minor spelling mistake o_0");
                    return "failed";        
          }
        break;
        case "hypotenuse":
            c = val1;
            switch (type2) {
                case "leg":
                    a = val2;
                    b = Math.sqrt(c * c - a * a);
                    alpha = toDegrees(Math.asin(a / c));
                    beta = 90 - alpha;
                    break;
                case "angle":
                    alpha = val2;
                    beta = 90 - alpha;
                    a = c * Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Minor spelling mistake o_0");
                    return "failed";
            } 
        break;
        case "adjacent angle":
            alpha = val1;
            beta = 90 - alpha;
            switch (type2) {
                case "leg":
                    a = val2;
                    c = a / Math.cos(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "hypotenuse":
                    c = val2;
                    a = c * Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Minor spelling mistake o_0");
                    return "failed";    
            }
        break;
        case "opposite angle":
            alpha = val1;
            beta = 90 - alpha;
            switch (type2) {
                case "leg":
                    a = val2;
                    c = a / Math.sin(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "hypotenuse":
                    c = val2;
                    a = c * Math.cos(toRadians(alpha));
                    b = Math.sqrt(c * c - a * a);
                    break;
                default:
                    console.log("Minor spelling mistake o_0");
                    return "failed";
            }
            break;
        case "angle":
            alpha = val1;
            beta = 90 - alpha;
            c = val2;
            a = c * Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);
            break;
        }

    console.log(
        'triangle (7, "leg", 8, "hypotenuse")', "\n",
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta );
      return "success";
}

console.log('triangle (7, "leg", 8, "hypotenuse")', "\n");
triangle (7, "leg", 8, "hypotenuse");