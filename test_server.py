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
        max_frames_values = [100, 500, 1000, 2000]
        for max_frames in max_frames_values:
            start_time = time.time()
            result = analyze_video(self.test_video_path, self.hoop_left, self.hoop_right, max_frames=max_frames)
            end_time = time.time()
            duration = end_time - start_time
            print(f"Max frames: {max_frames}, Duration: {duration:.2f} seconds, Total shots: {result['total_shots']}")

            self.assertIn('total_shots', result)

#     def tearDown(self):
#         if os.path.exists(self.test_video_path):
#             os.remove(self.test_video_path)

if __name__ == '__main__':
    unittest.main()