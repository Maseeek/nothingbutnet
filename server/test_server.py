import unittest
import os
import time
from server import analyze_video

class TestAnalyzeVideoPerformance(unittest.TestCase):

    def setUp(self):
        self.test_video_path = r"C:\Users\masee\OneDrive - Loughborough University\PERSONAL\flipped footage 10 freethrows.mov"
        self.hoop_left = [182, 346]
        self.hoop_right = [297, 359]

    def test_analyze_video_performance(self):
        # max_frames_values = [100, 500, 1000, 2000]
        # for max_frames in max_frames_values:
        #     start_time = time.time()
        #     result = analyze_video(self.test_video_path, self.hoop_left, self.hoop_right, max_frames=max_frames,accuracy=0.25)
        #     end_time = time.time()
        #     duration = end_time - start_time
        #     print(f"Max frames: {max_frames}, Duration: {duration:.2f} seconds, Total shots: {result['total_shots']}, Makes: {result['makes']}, Misses: {result['misses']}, FG percentage: {result['fg_percentage']}%, Angle: {result['average_angle']}, Make angle: {result['average_make_angle']}, Miss angle: {result['average_miss_angle']}, Longest streak: {result['longest_streak']}")
        #
        #     self.assertIn('total_shots', result)
        accuracy = [0.15]
        for acc in accuracy:
            start_time = time.time()
            result = analyze_video(self.test_video_path, self.hoop_left, self.hoop_right, max_frames=1750,accuracy=acc)
            end_time = time.time()
            duration = end_time - start_time
            print(f"Accuracy: {acc}, Duration: {duration:.2f} seconds, Total shots: {result['total_shots']}, Makes: {result['makes']}, Misses: {result['misses']}, FG percentage: {result['fg_percentage']}%, Angle: {result['average_angle']}")
#     def tearDown(self):
#         if os.path.exists(self.test_video_path):
#             os.remove(self.test_video_path)

if __name__ == '__main__':
    unittest.main()

    #Accuracy: 0.15, Duration: 9.73 seconds, Total shots: 7, Makes: 4, Misses: 3, FG percentage: 57.14%, Angle: 6.07 #incorrect
    #Accuracy: 0.15, Duration: 12.00 seconds, Total shots: 7, Makes: 3, Misses: 4, FG percentage: 42.86%, Angle: 14.61 initial
    #Accuracy: 0.15, Duration: 16.36 seconds, Total shots: 7, Makes: 3, Misses: 4, FG percentage: 42.86%, Angle: 21.07
    #Accuracy: 0.15, Duration: 14.60 seconds, Total shots: 7, Makes: 3, Misses: 4, FG percentage: 42.86%, Angle: 14.61 initial
    #Accuracy: 0.15, Duration: 15.14 seconds, Total shots: 7, Makes: 3, Misses: 4, FG percentage: 42.86%, Angle: 14.61 used optimised thing
    #Accuracy: 0.15, Duration: 14.37 seconds, Total shots: 7, Makes: 3, Misses: 4, FG percentage: 42.86%, Angle: 14.61 same as above