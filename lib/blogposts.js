const blogposts = [
  {
    id: "0",
    title:
      "Reimplementing DiffEdit: A Journey Through Image Editing with Deep Learning",
    date: "Aug 1, 2024",
    readTime: "5",
    content: (
      <div className="blog-post">
        <p>
          In this blog post, I&apos;ll share my experience reimplementing the
          DiffEdit paper, inspired by the fast.ai course &quot;Practical Deep
          Learning for Coders.&quot; This project demonstrates how I used AI
          techniques to edit images, transforming a horse into a zebra using
          deep learning models.
        </p>

        <figure>
          <img src="/horse.jpg" alt="Original horse image" />
          <figcaption>My starting point - an image of a horse</figcaption>
        </figure>

        <h2>Step 1: Preparing the Image</h2>
        <p>
          I began by resizing my input image to 512x512 pixels, which is a
          standard size for many deep learning models.
        </p>

        <h2>Step 2: Semantic Segmentation with CLIP</h2>
        <p>
          Next, I used the CLIP model to create a semantic segmentation of my
          image, providing prompts like &quot;horse&quot; and &quot;zebra&quot;
          to identify the areas I wanted to edit.
        </p>

        <figure>
          <img src="/attention-masks.png" alt="CLIP segmentation results" />
          <figcaption>
            CLIP segmentation results for &quot;horse&quot; and
            &quot;zebra&quot; prompts
          </figcaption>
        </figure>

        <h2>Step 3: Creating the Mask</h2>
        <p>
          I generated a mask by subtracting the &quot;zebra&quot; segmentation
          from the &quot;horse&quot; segmentation.
        </p>

        <figure>
          <img src="/mask.png" alt="Generated mask" />
          <figcaption>
            The generated mask highlighting areas to be edited
          </figcaption>
        </figure>

        <h2>Step 4: Refining the Mask</h2>
        <p>
          To improve the quality of my edit, I applied Gaussian filtering to
          smooth the mask and then thresholded it.
        </p>

        <figure>
          <img src="/refined-mask.png" alt="Refined mask" />
          <figcaption>
            The refined mask after smoothing and thresholding
          </figcaption>
        </figure>

        <h2>Step 5: Image Inpainting</h2>
        <p>
          Using the Stable Diffusion Inpainting model, I applied my edit with
          prompts describing what I wanted (&quot;A zebra&quot;) and what I
          didn't want (&quot;horse&quot;).
        </p>

        <figure>
          <img src="/output_image_0.png" alt="Edited image variation 1" />
          <img src="/output_image_1.png" alt="Edited image variation 2" />
          <img src="/output_image_2.png" alt="Edited image variation 3" />
          <figcaption>
            Three variations of the edited image, transforming the horse into a
            zebra
          </figcaption>
        </figure>

        <h2>Results and Discussion</h2>
        <p>
          The final results showcase how I successfully transformed the original
          horse image into multiple variations of a zebra. This demonstrates the
          power of combining semantic segmentation with generative AI for
          targeted image editing.
        </p>

        <h2>Conclusion</h2>
        <p>
          My reimplementation of DiffEdit showcases the potential of deep
          learning in creative tasks. By leveraging models like CLIP and Stable
          Diffusion, I was able to perform complex image edits with relatively
          simple prompts.
        </p>

        <figure>
          <img src="/resized.png" alt="Before: Horse" />
          <img src="/output_image_0.png" alt="After: Zebra" />
          <figcaption>Before and After: From Horse to Zebra</figcaption>
        </figure>
      </div>
    ),
  },
  {
    id: "1",
    title: "Books I&apos;ve read in 2024",
    date: "Sep 7, 2024",
    readTime: "2",
    content: (
      <div className="blog-post">
        <p>
          MAKE: Bootstrappser&apos;s Handbook by Pieter Levels
          <br></br>
          Man&apos;s Search for Meaning by Viktor Frankl
          <br></br>
          Talking to Strangers by Malcolm Gladwell
          <br></br>
          Meta Learning: How To Learn Deep Learning And Thrive In The Digital
          World by Radek Osmulski
          <br></br>
          Tao Te Ching by Lao Tzu
          <br></br>
          The Psychology of Money by Morgan Housel
          <br></br>
          The Demon Haunted World: Science as a Candle in the Dark by Carl Sagan
          <br></br>
          Superintelligence: Path, Dangers, Strategies by Nick Bostrom
        </p>
      </div>
    ),
  },
];

export default blogposts;
