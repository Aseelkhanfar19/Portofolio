
#two pointers
def isPalyndrome(word):
    left = 0
    right = len(word) - 1

    while left < right:
        if word[left] != word[right]:
            return False
        left += 1
        right -= 1
    return True

# print(isPalyndrome("tomamot"))



#two pointers
def sumToTarget(arr, target):
    left =0 
    right = len(arr)-1
    numbersPair = []

    while left < right:
        if arr[left] + arr[right] == target:
            numbersPair.append((arr[left], arr[right]))
            left+=1
            right-=1
            
        elif arr[left] + arr[right] < target:
            left+=1
        else:
            right-=1
    if len(numbersPair) > 0:
        return numbersPair
    return False
# print(sumToTarget([1,2,3,4,5,5,6,7,9], 10))



#two pointers
def isPalindrome(word):
    left = 0
    right = len(word) - 1

    while left < right:
        if word[left] == " ":
            left+=1
            continue
        if word[right] == " ":
            right-=1
            continue

        if word[left].lower() != word[right].lower():
            return False
        left +=1
        right-=1
    return True

# print(isPalindrome("this is si r"))


#two pointers
def maxArea(height):
    left=0
    right = len(height)-1
    max_area = 0
    
    while left < right:
        areaEquation = (right - left) * min(height[left], height[right])
        print(f"left: {left}, right: {right}, areaEquation: {areaEquation} max_area: {max_area}")
        max_area = max(max_area, areaEquation)
        print(f"max_area after comparison: {max_area}")
        if height[left] <= height[right]:
            left+=1
        else:
            right-=1


    return max_area

# print(maxArea([1,5,8,3,9,6,7,4,2,3]))


#two pointers
def findTriplets(array):
    left=0
    # middlePointers = left+1
    right=len(array)-1
    
    triplesPair =[]
    

    while left <right:
        print(f"left:{left} , right: {right}")
        print(f"current pairs: {triplesPair}")
        tripEquation = array[left] + array[left+1] + array[right]
        if tripEquation ==0:
            triplesPair.append((array[left],array[left+1],array[right]))
            right-=1
        else:
            left+=1
    return triplesPair

# print(findTriplets([0,-2,1,2,-1,-1,0,1,-2]))

def gradingStudents(grades):
    gradesToRound=[]
    for grade in grades:
        if 10-(grade%10) < 3 and 10-(grade%10) >0 :
            newRound=( (grade//10)+1 ) * 10
            gradesToRound.append(newRound)
            if newRound<38:
                gradesToRound.append(grade)
                continue
            
        elif 5-(grade%10) < 3 and 5-(grade%10) > 0 :
            newRound=((grade//10)*10) + 5
            if newRound<38:
                gradesToRound.append(grade)
                continue
            gradesToRound.append(newRound)
        else:
            newRound = grade
            gradesToRound.append(newRound)
            
    return gradesToRound


print(gradingStudents([13,57,89,100,90,91,43,0,44,78,69 ,18]))

        


