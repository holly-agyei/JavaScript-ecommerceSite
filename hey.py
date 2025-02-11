def push(num, temp_arr):
    temp_arr.append(num)

def popp(num, temp_arr):
    # Remove the first occurrence of num in the list
    if num in temp_arr:
        temp_arr.remove(num)

def MaxMin(operations, x):
    temp_arr = []
    product_arr = []

    for i in range(len(x))
        if operations[i] == "push":
            push(x[i], temp_arr)
        else:
            popp(x[i], temp_arr)

        #calc product
        if temp_arr:
            product_arr.append(min(temp_arr) * max(temp_arr))
        else:
            product_arr.append(0)  # Or any other default value when temp_arr is empty

    return product_arr

operations = ["push", "push", "push", "pop"]
x = [1, 2, 3, 1]

print(MaxMin(operations, x))
