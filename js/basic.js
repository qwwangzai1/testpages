

const cs = [1, 2, 3, 4, 5, 6, 7, 8, 9,
	    11,12,13,14,15,16,17,18,19,
	    21,22,23,24,25,26,27,28,29];

var lib = [[[6, 7, 8, 8, 9, 21, 22, 24, 25, 26, 28, 31, 31], [7, 23, 28]], [[6, 8, 17, 19, 25, 25, 26, 26, 27, 28, 28, 31, 31], [7, 18, 24, 27]], [[1, 2, 3, 5, 6, 11, 12, 13, 14, 15, 26, 31, 31], [4, 7, 13, 16, 26]], [[6, 6, 14, 16, 18, 22, 23, 23, 24, 24, 25, 31, 31], [6, 12, 13, 14, 15, 16, 17, 18, 19]], [[1, 2, 3, 6, 7, 8, 9, 12, 14, 17, 17, 31, 31], [4, 5, 6, 7, 8, 9, 13, 17]], [[9, 9, 11, 12, 13, 17, 19, 21, 21, 24, 25, 31, 31], [9, 18, 21, 23, 26]], [[5, 5, 5, 6, 7, 7, 8, 8, 18, 19, 27, 31, 31], [6, 9, 17, 27]], [[7, 8, 8, 9, 15, 15, 22, 24, 25, 26, 27, 31, 31], [6, 7, 8, 9, 15, 23]], [[1, 2, 3, 3, 11, 11, 14, 15, 21, 22, 23, 31, 31], [1, 2, 3, 4, 5, 11, 13, 16]], [[3, 3, 3, 6, 8, 23, 23, 26, 28, 29, 29, 31, 31], [7, 23, 27, 29]], [[7, 8, 9, 11, 11, 11, 14, 16, 17, 18, 27, 31, 31], [12, 13, 14, 15, 16, 19, 25, 26, 27, 28, 29]], [[1, 1, 1, 2, 3, 3, 5, 13, 21, 22, 23, 31, 31], [1, 4, 11, 12, 13, 14, 15]], [[3, 3, 7, 8, 9, 14, 16, 19, 19, 23, 25, 31, 31], [3, 15, 19, 24]], [[4, 5, 7, 8, 9, 11, 11, 18, 25, 26, 27, 31, 31], [3, 6, 11, 16, 17, 18, 19]], [[4, 4, 6, 8, 12, 13, 21, 22, 23, 25, 27, 31, 31], [7, 11, 14, 26]], [[4, 13, 14, 14, 16, 21, 22, 23, 23, 24, 25, 31, 31], [4, 12, 15]], [[1, 2, 3, 6, 7, 21, 22, 23, 24, 27, 29, 31, 31], [5, 8, 21, 24, 28]], [[2, 4, 12, 13, 14, 17, 27, 27, 28, 29, 29, 31, 31], [3, 17, 28]], [[4, 5, 6, 6, 7, 8, 16, 17, 17, 24, 25, 31, 31], [14, 15, 16, 17, 18, 23, 26]], [[3, 16, 17, 18, 21, 22, 23, 25, 26, 27, 29, 31, 31], [1, 2, 3, 4, 5, 24, 27, 28, 29]], [[1, 2, 7, 8, 18, 18, 18, 26, 28, 29, 29, 31, 31], [3, 6, 9, 27]], [[2, 2, 5, 6, 7, 11, 13, 18, 19, 27, 29, 31, 31], [12, 17, 28]], [[5, 7, 7, 8, 9, 15, 16, 17, 18, 23, 24, 31, 31], [6, 15, 18, 22, 25]], [[2, 4, 4, 5, 21, 21, 23, 24, 25, 27, 27, 31, 31], [3, 6, 21, 27]], [[3, 4, 6, 6, 12, 13, 14, 21, 23, 28, 29, 31, 31], [2, 5, 22, 27]], [[2, 3, 5, 5, 9, 12, 13, 14, 27, 28, 29, 31, 31], [1, 4, 5, 7, 8, 9]], [[8, 8, 14, 15, 15, 17, 23, 24, 25, 26, 28, 31, 31], [13, 16, 27]], [[2, 3, 4, 15, 17, 17, 18, 19, 19, 21, 21, 31, 31], [13, 14, 15, 16, 18, 19, 21]], [[3, 4, 5, 6, 12, 13, 16, 17, 18, 24, 26, 31, 31], [3, 6, 11, 14, 25]], [[3, 7, 8, 9, 11, 12, 12, 14, 25, 26, 27, 31, 31], [3, 13]], [[1, 2, 5, 6, 7, 9, 17, 18, 19, 24, 25, 31, 31], [3, 9, 23, 26]], [[2, 2, 3, 4, 11, 12, 13, 15, 16, 24, 25, 31, 31], [2, 5, 14, 17, 23, 26]], [[6, 7, 7, 9, 19, 23, 24, 25, 27, 28, 29, 31, 31], [5, 8, 19]], [[7, 8, 14, 15, 16, 24, 24, 27, 27, 27, 28, 31, 31], [6, 9, 24, 26, 27, 28, 29]], [[1, 2, 3, 5, 5, 6, 6, 7, 9, 18, 19, 31, 31], [4, 5, 6, 7, 8, 9, 17]], [[3, 3, 6, 8, 16, 18, 21, 22, 24, 25, 26, 31, 31], [7, 17, 23]], [[5, 12, 13, 13, 14, 14, 15, 16, 17, 22, 22, 31, 31], [3, 4, 5, 6, 7, 12, 15, 18, 22]], [[2, 5, 6, 6, 7, 7, 8, 13, 14, 25, 27, 31, 31], [2, 12, 15, 26]], [[1, 2, 3, 6, 7, 13, 22, 23, 24, 25, 27, 31, 31], [5, 8, 13, 26]], [[8, 8, 12, 13, 23, 24, 25, 25, 26, 28, 29, 31, 31], [11, 14, 24, 27]], [[2, 4, 15, 16, 19, 19, 26, 27, 28, 28, 29, 31, 31], [3, 14, 17, 27]], [[1, 3, 4, 5, 6, 14, 14, 15, 27, 28, 29, 31, 31], [2, 13, 14, 15, 16, 17]], [[7, 8, 9, 14, 16, 17, 19, 22, 22, 25, 25, 31, 31], [15, 18, 22, 25]], [[3, 5, 8, 11, 11, 11, 25, 26, 27, 28, 29, 31, 31], [4, 8, 24, 27]], [[1, 3, 5, 6, 22, 22, 23, 24, 25, 28, 29, 31, 31], [2, 4, 7, 27]], [[1, 2, 4, 5, 6, 19, 22, 23, 27, 28, 29, 31, 31], [3, 19, 21, 24]], [[4, 5, 6, 8, 9, 16, 18, 19, 19, 23, 24, 31, 31], [7, 17, 22, 25]], [[1, 2, 3, 12, 17, 18, 24, 26, 26, 27, 28, 31, 31], [12, 16, 19, 25]], [[1, 1, 3, 5, 12, 13, 14, 17, 19, 28, 29, 31, 31], [4, 18, 27]], [[6, 6, 9, 9, 13, 13, 17, 18, 19, 27, 29, 31, 31], [6, 9, 13, 28]], [[5, 6, 7, 12, 12, 14, 21, 23, 25, 26, 27, 31, 31], [12, 13, 14, 15, 16, 22]], [[1, 3, 4, 5, 6, 12, 14, 15, 16, 17, 29, 31, 31], [2, 13, 29]], [[6, 17, 18, 21, 22, 23, 23, 24, 27, 28, 29, 31, 31], [6, 16, 19, 22, 25]], [[1, 13, 14, 15, 15, 16, 17, 21, 23, 27, 29, 31, 31], [1, 22, 28]], [[2, 2, 3, 4, 7, 9, 15, 16, 17, 17, 19, 31, 31], [2, 5, 8, 18]], [[12, 13, 15, 16, 19, 19, 23, 24, 29, 29, 29, 31, 31], [11, 14, 17, 22, 25]], [[2, 3, 4, 5, 6, 7, 12, 12, 13, 27, 27, 31, 31], [11, 12, 13, 14, 15, 27]], [[1, 6, 8, 12, 13, 14, 21, 22, 23, 27, 29, 31, 31], [1, 7, 28]], [[3, 4, 6, 7, 8, 14, 23, 24, 27, 28, 29, 31, 31], [2, 5, 14, 22, 25]], [[1, 3, 9, 12, 13, 14, 22, 23, 24, 27, 27, 31, 31], [2, 7, 8, 9, 27]], [[2, 3, 7, 11, 12, 13, 17, 19, 27, 28, 29, 31, 31], [1, 4, 7, 18]], [[4, 5, 7, 9, 19, 22, 23, 24, 24, 25, 26, 31, 31], [3, 6, 8, 19]], [[7, 8, 19, 21, 22, 23, 24, 25, 26, 28, 29, 31, 31], [6, 9, 19, 27]], [[2, 11, 12, 13, 13, 14, 15, 26, 27, 28, 29, 31, 31], [1, 2, 3, 4, 24, 25, 26, 27, 28, 29]], [[4, 6, 6, 7, 8, 17, 17, 21, 22, 23, 28, 31, 31], [5, 17, 26, 27, 28, 29]], [[1, 2, 3, 6, 7, 8, 15, 16, 22, 23, 27, 31, 31], [14, 17, 21, 24, 27]], [[4, 5, 6, 14, 15, 18, 26, 26, 27, 28, 28, 31, 31], [13, 16, 18, 27]], [[1, 3, 6, 8, 12, 13, 14, 27, 28, 28, 29, 31, 31], [2, 7, 28]], [[6, 13, 13, 13, 15, 16, 16, 17, 17, 26, 28, 31, 31], [6, 15, 18, 27]], [[3, 4, 7, 14, 14, 16, 17, 18, 22, 23, 24, 31, 31], [2, 5, 6, 7, 8, 9, 14]], [[5, 15, 16, 17, 21, 23, 23, 25, 25, 26, 27, 31, 31], [5, 22, 24]], [[3, 5, 9, 9, 9, 18, 22, 23, 24, 25, 27, 31, 31], [4, 18, 26]], [[6, 7, 9, 9, 11, 21, 22, 23, 26, 27, 28, 31, 31], [5, 8, 9, 11, 12, 13]], [[5, 17, 17, 21, 22, 23, 24, 26, 27, 28, 29, 31, 31], [3, 4, 5, 6, 7, 17, 25]], [[4, 5, 6, 17, 18, 21, 22, 23, 24, 28, 28, 31, 31], [16, 19, 21, 22, 23, 24, 25, 26, 28]], [[6, 6, 7, 8, 9, 12, 21, 22, 27, 28, 29, 31, 31], [6, 11, 12, 13, 14, 23]], [[2, 3, 4, 9, 11, 13, 14, 14, 27, 28, 29, 31, 31], [7, 8, 9, 12, 14]], [[1, 2, 3, 7, 8, 17, 18, 22, 23, 24, 26, 31, 31], [6, 9, 16, 19, 26]], [[5, 7, 12, 13, 15, 15, 23, 24, 26, 27, 28, 31, 31], [6, 11, 14, 22, 25]], [[7, 7, 12, 14, 18, 18, 21, 21, 26, 27, 28, 31, 31], [7, 13, 18, 21]], [[4, 5, 7, 8, 9, 18, 19, 22, 23, 24, 26, 31, 31], [3, 6, 17, 26]], [[2, 3, 4, 12, 15, 21, 22, 23, 27, 28, 29, 31, 31], [11, 12, 13, 14, 15, 16, 17]], [[1, 3, 4, 5, 12, 13, 14, 23, 24, 28, 28, 31, 31], [1, 2, 3, 6, 22, 25, 28]], [[3, 4, 5, 9, 9, 9, 14, 17, 18, 23, 24, 31, 31], [14, 16, 19, 22, 25]], [[3, 3, 4, 5, 5, 19, 23, 24, 26, 26, 26, 31, 31], [4, 19, 22, 25]], [[3, 4, 5, 7, 12, 12, 13, 14, 23, 24, 25, 31, 31], [2, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]], [[1, 6, 6, 15, 16, 17, 24, 25, 26, 29, 29, 31, 31], [1, 2, 3, 6, 29]], [[1, 2, 3, 7, 12, 13, 14, 21, 23, 24, 25, 31, 31], [5, 6, 7, 8, 9, 21, 22, 23, 26]], [[7, 8, 15, 16, 17, 19, 22, 22, 25, 26, 27, 31, 31], [6, 9, 14, 17, 18, 19, 22]], [[3, 4, 13, 16, 17, 18, 22, 23, 24, 26, 28, 31, 31], [2, 5, 13, 27]], [[11, 11, 14, 15, 16, 21, 21, 23, 24, 26, 27, 31, 31], [11, 21, 22, 25, 28]], [[5, 5, 6, 8, 9, 14, 14, 14, 22, 23, 24, 31, 31], [4, 5, 6, 7, 8, 9]], [[1, 1, 2, 5, 6, 7, 15, 17, 24, 25, 26, 31, 31], [1, 2, 3, 4, 16]], [[12, 17, 17, 21, 22, 26, 26, 27, 27, 28, 28, 31, 31], [11, 12, 13, 14, 17, 23]], [[2, 5, 6, 7, 9, 27, 27, 28, 28, 29, 29, 31, 31], [1, 2, 3, 4, 7, 8, 9]], [[1, 3, 5, 6, 12, 12, 22, 24, 27, 28, 29, 31, 31], [2, 4, 7, 23]], [[2, 3, 4, 8, 8, 11, 13, 19, 27, 28, 29, 31, 31], [8, 12, 17, 18, 19]], [[1, 2, 3, 12, 13, 18, 25, 26, 26, 27, 27, 31, 31], [11, 14, 18, 25, 28]], [[5, 6, 7, 15, 22, 23, 24, 25, 26, 27, 28, 31, 31], [13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29]], [[2, 3, 4, 9, 9, 22, 22, 22, 24, 25, 29, 31, 31], [9, 23, 26, 27, 28, 29]], [[1, 2, 3, 13, 14, 15, 21, 21, 22, 23, 25, 27, 31], [21, 24, 26]], [[1, 1, 2, 2, 6, 7, 8, 17, 17, 17, 25, 26, 31], [1, 2, 24, 27]], [[3, 4, 5, 7, 8, 9, 11, 13, 17, 17, 17, 28, 31], [12, 28]], [[1, 2, 4, 5, 6, 7, 7, 7, 13, 13, 22, 22, 31], [3, 13, 22]], [[4, 12, 13, 14, 15, 17, 23, 24, 25, 27, 28, 29, 31], [4, 16]], [[2, 3, 4, 11, 12, 17, 18, 22, 22, 24, 25, 26, 31], [13, 16, 19]], [[1, 2, 3, 7, 8, 9, 12, 13, 14, 15, 17, 23, 31], [16, 23]], [[7, 8, 9, 12, 14, 15, 16, 17, 17, 27, 27, 27, 31], [11, 12, 13, 14, 17]], [[12, 13, 14, 19, 19, 21, 22, 25, 25, 27, 28, 29, 31], [19, 23, 25]], [[4, 5, 6, 7, 8, 9, 13, 16, 17, 18, 23, 25, 31], [13, 24]], [[3, 4, 5, 5, 7, 15, 16, 17, 18, 18, 27, 28, 31], [6, 26, 29]], [[3, 3, 4, 6, 12, 13, 14, 23, 24, 26, 27, 28, 31], [5, 22, 25]], [[2, 2, 7, 8, 9, 12, 13, 14, 18, 18, 18, 19, 31], [2, 17, 18, 19]], [[2, 3, 4, 6, 6, 6, 12, 13, 21, 21, 26, 28, 31], [11, 14, 27]], [[3, 4, 11, 12, 13, 16, 17, 23, 23, 24, 25, 26, 31], [2, 5, 15, 18]], [[1, 2, 7, 8, 9, 15, 16, 17, 21, 26, 27, 28, 31], [3, 21]], [[11, 13, 17, 18, 19, 22, 22, 24, 25, 26, 29, 29, 31], [12, 22, 29]], [[2, 3, 3, 4, 5, 6, 7, 8, 9, 17, 18, 19, 31], [1, 2, 3, 4, 6, 7, 9]], [[1, 2, 3, 4, 5, 14, 15, 16, 18, 18, 22, 22, 31], [3, 6, 18, 22]], [[4, 5, 5, 6, 8, 9, 21, 22, 23, 25, 26, 27, 31], [5, 7]], [[3, 3, 6, 7, 8, 12, 13, 22, 23, 24, 25, 25, 31], [3, 11, 14, 25]], [[1, 3, 5, 5, 12, 13, 14, 15, 16, 17, 22, 22, 31], [2, 5, 22]], [[2, 2, 2, 5, 6, 9, 14, 15, 16, 25, 26, 27, 31], [4, 7, 9]], [[1, 1, 5, 5, 5, 7, 8, 9, 15, 16, 27, 29, 31], [14, 17, 28]], [[7, 8, 9, 11, 12, 13, 15, 16, 17, 18, 19, 29, 31], [14, 17, 29]], [[1, 2, 3, 4, 5, 13, 15, 16, 17, 22, 23, 24, 31], [3, 6, 13]], [[3, 4, 5, 9, 9, 9, 12, 13, 14, 18, 19, 29, 31], [17, 29]], [[5, 7, 9, 9, 11, 12, 13, 15, 16, 17, 26, 27, 31], [6, 25, 28]], [[3, 4, 4, 5, 5, 6, 13, 16, 16, 16, 22, 23, 31], [13, 21, 24]], [[6, 6, 8, 9, 16, 17, 18, 25, 25, 26, 27, 28, 31], [6, 7, 25]], [[1, 2, 3, 11, 12, 21, 23, 27, 27, 27, 29, 29, 31], [13, 22]], [[1, 3, 6, 7, 16, 16, 22, 23, 24, 27, 28, 29, 31], [2, 5, 8]], [[3, 3, 3, 6, 8, 15, 16, 17, 25, 27, 28, 29, 31], [7, 25]], [[2, 3, 8, 8, 14, 15, 16, 21, 22, 23, 28, 29, 31], [1, 4, 27]], [[4, 5, 6, 7, 9, 16, 17, 18, 21, 22, 23, 26, 31], [8, 26]], [[3, 5, 13, 14, 15, 17, 17, 22, 23, 24, 25, 27, 31], [4, 26]], [[2, 14, 15, 16, 22, 23, 23, 24, 24, 25, 27, 28, 31], [2, 26, 29]], [[3, 5, 9, 9, 15, 16, 17, 22, 23, 24, 25, 26, 31], [4, 21, 24, 27]], [[1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 31], [8, 11, 14]], [[6, 7, 8, 9, 11, 12, 13, 16, 17, 18, 25, 27, 31], [6, 9, 26]], [[8, 9, 12, 22, 23, 24, 27, 27, 28, 28, 29, 29, 31], [7, 12]], [[2, 5, 6, 7, 13, 14, 15, 17, 18, 19, 25, 26, 31], [2, 24, 27]], [[3, 3, 3, 4, 5, 12, 13, 14, 14, 16, 26, 28, 31], [15, 27]], [[3, 3, 4, 5, 6, 21, 21, 23, 24, 27, 28, 29, 31], [3, 21, 22, 25]], [[1, 2, 6, 7, 8, 19, 19, 21, 22, 23, 29, 29, 31], [3, 19, 29]], [[8, 14, 15, 16, 21, 21, 22, 23, 24, 26, 27, 28, 31], [6, 7, 8, 9, 21]], [[2, 3, 3, 4, 5, 6, 7, 7, 8, 9, 21, 21, 31], [1, 2, 3, 4, 5, 8, 21]], [[4, 6, 13, 13, 13, 14, 16, 24, 24, 24, 29, 29, 31], [5, 15]], [[6, 7, 8, 8, 9, 12, 12, 17, 18, 19, 23, 24, 31], [7, 22, 25]], [[2, 3, 5, 5, 14, 14, 21, 22, 23, 25, 26, 27, 31], [1, 4, 5, 14]], [[5, 5, 6, 7, 8, 11, 13, 15, 16, 26, 27, 28, 31], [12, 14, 17]], [[2, 3, 9, 9, 14, 15, 16, 25, 27, 27, 28, 29, 31], [1, 4, 26]], [[1, 2, 3, 9, 9, 11, 13, 14, 15, 16, 24, 25, 31], [12, 23, 26]], [[2, 3, 4, 6, 13, 14, 14, 15, 15, 26, 27, 28, 31], [6, 13, 16]], [[1, 1, 6, 7, 8, 11, 12, 21, 23, 23, 24, 25, 31], [13, 22]], [[4, 5, 6, 8, 12, 14, 16, 17, 18, 21, 22, 23, 31], [8, 13]], [[1, 1, 1, 6, 14, 14, 14, 17, 17, 23, 24, 25, 31], [4, 5, 6, 7, 8, 17]], [[2, 2, 11, 12, 13, 21, 22, 23, 24, 26, 27, 28, 31], [2, 21, 22, 23, 24, 25, 26, 29]], [[3, 4, 6, 7, 8, 12, 13, 14, 17, 17, 26, 28, 31], [2, 5, 27]], [[1, 2, 3, 14, 16, 17, 18, 22, 23, 24, 26, 27, 31], [14, 25, 28]], [[1, 2, 3, 14, 14, 15, 16, 17, 24, 26, 29, 29, 31], [14, 25, 29]], [[5, 6, 9, 9, 12, 13, 24, 25, 26, 27, 28, 29, 31], [4, 7, 11, 14]], [[1, 3, 5, 7, 8, 9, 18, 18, 18, 26, 27, 28, 31], [1, 2, 4, 5]], [[2, 4, 12, 13, 14, 22, 22, 22, 23, 24, 25, 25, 31], [3, 22, 25]], [[3, 4, 7, 11, 12, 12, 13, 13, 14, 25, 26, 27, 31], [2, 5, 7]], [[1, 1, 11, 12, 13, 21, 21, 23, 24, 25, 28, 28, 31], [1, 21, 28]], [[5, 7, 12, 13, 14, 17, 18, 19, 24, 26, 27, 28, 31], [6, 24]], [[4, 4, 5, 6, 7, 13, 13, 14, 15, 16, 28, 29, 31], [4, 13, 27]], [[12, 13, 16, 17, 17, 18, 18, 25, 26, 27, 29, 29, 31], [11, 14, 16, 19]], [[1, 3, 5, 5, 7, 8, 9, 16, 17, 18, 22, 24, 31], [2, 23]], [[5, 6, 11, 12, 13, 14, 14, 17, 18, 19, 21, 22, 31], [4, 7, 23]], [[5, 11, 12, 13, 16, 17, 18, 22, 23, 24, 25, 26, 31], [5, 21, 24, 27]], [[2, 2, 13, 15, 16, 17, 18, 21, 21, 26, 27, 28, 31], [2, 14, 21]], [[2, 3, 4, 11, 11, 11, 17, 19, 25, 25, 26, 28, 31], [18, 27]], [[7, 8, 9, 11, 12, 13, 18, 22, 23, 23, 23, 24, 31], [16, 17, 18, 19, 23]], [[6, 7, 8, 11, 12, 16, 17, 18, 24, 24, 25, 25, 31], [13, 24, 25]], [[2, 3, 4, 5, 5, 8, 9, 11, 12, 13, 22, 24, 31], [7, 23]], [[2, 3, 4, 13, 14, 15, 21, 22, 24, 25, 25, 26, 31], [23, 25]], [[3, 4, 5, 7, 7, 11, 12, 13, 14, 15, 26, 28, 31], [13, 16, 27]], [[1, 2, 3, 7, 8, 9, 9, 15, 16, 17, 22, 22, 31], [6, 7, 8, 9, 22]], [[6, 8, 13, 14, 14, 15, 16, 17, 18, 22, 23, 24, 31], [7, 14]], [[4, 6, 13, 14, 15, 17, 17, 22, 24, 27, 28, 29, 31], [5, 23]], [[1, 3, 7, 8, 9, 12, 12, 13, 14, 15, 16, 18, 31], [2, 17]], [[7, 9, 13, 14, 15, 15, 16, 17, 24, 26, 27, 27, 31], [8, 25]], [[2, 2, 7, 8, 9, 12, 13, 17, 17, 17, 29, 29, 31], [2, 11, 14, 29]], [[2, 2, 2, 5, 6, 7, 12, 13, 17, 17, 18, 19, 31], [11, 14, 17]], [[3, 4, 5, 6, 13, 14, 17, 18, 19, 27, 28, 29, 31], [3, 6, 12, 15]], [[4, 4, 11, 12, 14, 15, 16, 21, 22, 23, 26, 27, 31], [13, 25, 28]], [[1, 1, 7, 8, 9, 13, 14, 15, 22, 23, 27, 29, 31], [21, 24, 28]], [[5, 5, 6, 6, 7, 7, 9, 9, 14, 15, 28, 29, 31], [13, 16, 27]], [[4, 5, 6, 7, 7, 17, 18, 19, 21, 22, 27, 29, 31], [23, 28]], [[1, 2, 3, 4, 5, 6, 14, 15, 23, 23, 24, 25, 31], [13, 16, 23, 26]], [[2, 3, 13, 13, 17, 17, 17, 19, 19, 19, 23, 25, 31], [1, 4, 24]], [[7, 8, 11, 11, 24, 25, 26, 26, 27, 28, 29, 29, 31], [6, 9, 11, 29]], [[5, 6, 7, 8, 14, 15, 16, 22, 23, 24, 24, 25, 31], [5, 8, 23, 26]], [[5, 6, 8, 9, 11, 11, 11, 16, 16, 21, 22, 23, 31], [4, 7]], [[1, 3, 6, 6, 12, 13, 14, 17, 18, 19, 26, 28, 31], [2, 27]], [[2, 2, 3, 3, 4, 4, 4, 16, 17, 18, 25, 26, 31], [1, 2, 3, 4, 24, 27]], [[3, 4, 5, 5, 6, 7, 12, 13, 14, 19, 19, 23, 31], [19, 21, 22, 23, 24, 25]], [[3, 4, 5, 5, 12, 13, 14, 23, 25, 27, 28, 29, 31], [2, 5, 24]]];

var idx = 0;
var picked = [];
var ans = [1,4];
var pos = 0;

function hide(n) {
    var pz = document.getElementById('pick-zone');
    var idx = cs.indexOf(n);
    console.log(pz.childNodes);
    pz.childNodes[idx].style.visibility = 'hidden';
}

function show(n) {
    var pz = document.getElementById('pick-zone');
    var idx = cs.indexOf(n);
    pz.childNodes[idx].style.visibility = 'visible';
}

function insert(n) {
    picked.push(n);
}

function del(n) {
    var idx = picked.indexOf(n);
    picked.splice(idx,1);
}

function picked_node(n) {
    var temp = document.getElementById('picked-template');
    var newnode = temp.cloneNode(true);
    newnode.removeAttribute('id');
    newnode.onclick = function(){remove(n)};
    newnode.childNodes[0].src = path(n);
    newnode.hidden = false;
    return newnode;
}

function path(n) {
    if (n < 10) {
	return 'img/m' + n + '.gif';
    } else if (n < 20) {
	return 'img/p' + (n-10) + '.gif';
    } else if (n < 30) {
	return 'img/s' + (n-20) + '.gif';
    } else if (n == 31) {
	return 'img/z7.gif';
    } else {
	console.log('error on img path ' + n);
    }
}

function append(n) {
    var node = picked_node(n);
    var pdz = document.getElementById('picked-zone');
    pdz.appendChild(node);
}

function delNode(n) {
    var pdz = document.getElementById('picked-zone');
    var idx = picked.indexOf(n);
    var target = pdz.childNodes[idx];
    console.log(target);
    pdz.removeChild(target);
}

function successbox(msg, secs) {
    var node = $('.message')[0];
    node.innerText = msg;
    node.style.color = "chartreuse";
    node.style.visibility = 'visible';
    setTimeout("disappear()", secs*1000);
}

function warnbox(msg, secs) {
    var node = $('.message')[0];
    node.innerText = msg;
    node.style.color = "crimson";
    node.style.visibility = 'visible';
    setTimeout("disappear()", secs*1000);
}

function paybox() {
    var node = $('.message')[0];
    node.style.color = "chartreuse";
    node.innerHTML = "<div style='font-size:1.5vh'>觉得还不错，请作者喝杯豆浆</div><br/><img src='./img/pay.png'/><br/> <div style='color: white;font-size:1.5vh;'>(点一下关闭)</div>"
    node.style.visibility = 'visible';
}

function disappear() {
    node = $('.message')[0];
    node.style.visibility = 'hidden';
}

function pick(n) {
    console.log(n);
    backs = $('.back')
    // hide(n);
    if (ans.includes(n) && !picked.includes(n)) {
        insert(n);
        backs[pos].src = path(n);
        if (ans.length == picked.length) {
            successbox("全对，下一题！", 1);
            setTimeout("next()", 1000);
            //next();
        } else {
            successbox("对啦！再找找其他的吧！", 0.5);
            expand(pos + 1);
        }
    } else if (ans.includes(n)) {
        warnbox("这个已经选过了~", 0.5);
    } else {
        warnbox("不对，这算诈胡哦！", 0.5);
    }
    
    // append(n);
}

function remove(n) {
    // console.log(n);
    show(n);
    delNode(n);
    del(n);
}

function contain(arr, x) {
    return arr.indexOf(x) != -1;
}

function play() {
    var pdz = document.getElementById('picked-zone');
    for(i=0;i<picked.length;i++) {
	if(contain(ans,picked[i])) {
	    green(pdz.childNodes[i]);
	} else {
	    red(pdz.childNodes[i]);
	}
    }
    for (i=0;i<ans.length;i++) {
	if(! contain(picked,ans[i])) {
	    trans(ans[i]);
	}
    }
}

function green(node) {
    node.style.border = 'solid 1px green';
    node.style.borderRadius = '1px';
    node.removeChild(node.lastChild);
    node.onclick = function () {};
}

function red(node) {
    node.style.border = 'solid 1px red';
    node.style.borderRadius = '1px';
    node.removeChild(node.lastChild);
    node.onclick = function () {};
}

function trans(n) {
    var node = picked_node(n);
    var img = node.childNodes[0];
    img.style.opacity = 0.5;
    node.removeChild(node.lastChild);
    node.onclick = function () {};
    var pdz = document.getElementById('picked-zone');
    pdz.appendChild(node);
}

function handNode(n) {
    var temp = document.getElementById('hand-template');
    var newnode = temp.cloneNode();
    newnode.src = path(n);
    newnode.removeAttribute('id');
    newnode.hidden = false;
    return newnode;
}

function removeChildren(parent) {
    var first = parent.firstElementChild;
    while (first) {
	first.remove();
	first = parent.firstElementChild;
    }
}

function init(hand, result) {
    var handZone = document.getElementById('hand-zone');
    removeChildren(handZone);
    for(i=0;i<hand.length;i++) {
	var node = handNode(hand[i]);
	handZone.appendChild(node);
    }
    ans = result;
    var back = $('#covertemp')[0];
    var parentNode = $('#picked-zone')[0];
    for (let i = 0; i < ans.length; i++) {
        var clonenode = back.cloneNode(true);
        clonenode.setAttribute("id", "div-" + i);
        clonenode.hidden = false;
        clonenode.onclick = () => expand(i);
        parentNode.appendChild(clonenode);
    }
    if (pos == 0) {
        addani();
    }

    successbox('加载完成！', 1)
    console.log("init done!");
}

function addani() {
    var back = $('.back')[0];
    var ani = $('.wrapper')[0];
    console.log("back height:%d, ani.height:%d", back.clientHeight, ani.clientHeight);
    var y = back.parentNode.offsetTop + back.height / 2 - ani.clientHeight / 2;
    var x = back.parentNode.offsetLeft + back.width / 2 - ani.clientWidth / 2 ;
    console.log(x);
    console.log(y);
    ani.style.left = x -50 + 'px';
    ani.style.top = y + 'px';
}

function next() {
    if (idx < 29) {
        idx = idx+1;
    } else {
        idx = idx-29;
    }

    var item = lib[idx];
    removeChildren($('#picked-zone')[0]);
    init(item[0], item[1]);
    
   
    pos = 0;
    expand(0);
    picked = [];
}

function showat(y) {
    var ele = $('#pick-zone')[0];
    var dis = y - ele.clientHeight / 2;
    ele.style.top = dis + 'px';
    ele.style.visibility = 'visible';
}

function expand(n) {
    console.log('expand : %d', n);
    node = $('#picked-zone > img')[n];
    console.log(node);
    y1 = node.parentNode.offsetTop;
    showat(node.height / 2 + node.offsetTop + y1);
    ani = $('.wrapper')[0];
    pos = n;
    if (n == 0 && ani) {
        ani.parentNode.removeChild(ani);
    }
    return node;
}

window.onload = function () {
    idx = Math.floor(Math.random()*lib.length);
    var n = lib[idx];
    init(n[0], n[1]);    
}

    
