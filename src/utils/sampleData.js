export const sampleData =
  "{ type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3 }\n" +
  "{ type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201 }\n" +
  "{ type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser'] }\n" +
  "{ type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3 }\n" +
  "{ type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201 }\n" +
  "{ type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser'] }"
