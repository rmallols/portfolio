import React from 'react';

export default function SkillsText() {
    return (
        <div className="SkillsText is-text">
            <p>
                <label
                    className="h6 is-color-pink"
                    data-testid="SkillsText-title"
                >
                    I love JavaScript!
                </label>
                <br />
                I've been using it commercially for almost two decades; not just
                in frontend and backend, but also in some exotic environments
                like PDF readers and{' '}
                <a
                    href="https://www.youtube.com/watch?v=TPNOrSAb8Wk&t=1340s"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    robots
                </a>
                .
            </p>
            <p>
                JavaScript friends are friends of mine too. Through my career,
                I've worked with many JS libraries, plugins and frameworks,
                including YUI, jQuery and Angular (I was one of its first devs
                globally!). I specialised in{' '}
                <label className="is-color-green">React</label>&nbsp; an I'm now
                learning <label className="is-color-green">Deno</label>&nbsp;
                and <label className="is-color-green">Vue3</label>.
            </p>
            <p>
                I really enjoy playing with{' '}
                <label className="is-color-yellow">UI/UX</label>&nbsp; too! I
                strongly believe that things should work smoothly, but they
                should look great too.
            </p>
            <p>
                I'm a&nbsp;
                <label className="is-color-yellow">testing advocate</label> at
                any level (unit, component, functional, integration... even
                screenshot-based!)
            </p>
            <p>
                And, of course, the{' '}
                <label className="is-color-yellow">cloud</label>!&nbsp; I've
                worked with different platforms including AWS (my favourite!),
                Google Cloud, Heroku, Now/Vercel, Github Pages, etc.
            </p>
            <p>
                I'm passionate about building{' '}
                <label className="is-color-yellow">hybrid apps</label> running
                natively on mobile and desktop, using a single core and APIs.
            </p>
        </div>
    );
}
