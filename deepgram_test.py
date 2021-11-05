from deepgram import Deepgram
import asyncio, json

# The API key you created in step 1
DEEPGRAM_API_KEY = 'a82f151500fd0bf19d416c61bb2108bdea9b60b9'

# Name and extension of the file you downloaded (e.g. sample.wav)
PATH_TO_FILE = 'general 1.mp3'

async def main():
    # Initializes the Deepgram SDK
    dg_client = Deepgram(DEEPGRAM_API_KEY)
    # Open the Audio File
    with open(PATH_TO_FILE, 'rb') as audio:
        # or appropriate mimetype of your file
        source = {'buffer': audio, 'mimetype': 'audio/mp3'}

        print('Requesting transcript...')
        print('Your file may take up to a couple minutes to process.')
        print('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
        print('To learn more about customizing your transcripts check out developers.deepgram.com.')

        response = await dg_client.transcription.prerecorded(source,  {'punctuate': True})
        print(json.dumps(response, indent=4))

asyncio.run(main())