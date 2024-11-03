import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css';

function Events() {
  const pastEvents = [
    {
      id: 2,
      title: "IRIS Innovation Hackathon 2024",
      description: "We hope you enjoyed the exhilarating event organized by the I.R.I.S. Club!",
      image: "./sephackathon.jpg",
      date: "2024-09-28",
      highlights: [
        "The IRIS Innovation Hackathon gathered enthusiastic participants competing for exciting prizes, including ₹36,000 in BharatGo vouchers for the top three teams. The event offered valuable networking opportunities, allowing attendees to connect with industry leaders and fellow innovators. This collaborative environment fostered teamwork and creativity, leading to innovative solutions to real-world challenges."
      ],
      conclusion: "Thank you for joining us and contributing to a dynamic event that fuels creativity and innovation!"
    },
    {
      id: 1,
      title: "Innovation Hackathon",
      description: "The Inter-Campus Open Innovation Hackathon, organized by ASPIRE with Engineer's Cradle, I.R.I.S. and MIT-TBI, gathered Pune students. Teams of up to two registered online and competed at their colleges. The top three teams advanced to the finals at MIT-WPU, where they built prototypes, received mentorship, and pitched to experts. Exciting prizes included cash rewards and funding opportunities.",
      image: "./past-innovation-hackathon.jpg",
      date: "2024-02-15",
      time: "",
    }
  ];
  pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));

  const podcast = {
    id: 1,
    title: "I.R.I.S. Podcast",
    description: "Our latest podcast episode",
    image: "./podcast1.jpg",
    date: "2024-03-14 || ",
    length: "Length: 21 mins 02 secs",
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className={styles.events}>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Events</h1>

        {/* Upcoming Events Section */}
        <section className={styles.upcomingEvents}>
          <h2 className={styles.upcoming}>Upcoming Events</h2>
          <p className={styles.text}>Stay tuned for more upcoming exciting events!</p>
        </section>

        {/* Past Events Section */}
        <section className={styles.pastEvents}>
          <h2 className={styles.past}>Past Events</h2>
          <div className={styles.eventList}>
            {pastEvents.map(event => (
              <div key={event.id} className={styles.eventCard}>
                <img src={event.image} alt={event.title} />
                <h2>{event.title}</h2>
                <p>Held on: {new Date(event.date).toLocaleDateString()}</p>
                <p>{event.description}</p>
                <p>{event.time}</p>
                {event.highlights && (
                  <div className={styles.highlightsList}>
                    {event.highlights.map((highlight, index) => (
                      <p key={index}>{highlight}</p>
                    ))}
                  </div>
                )}
                {event.conclusion && <p className={styles.conclusion}>{event.conclusion}</p>}
                <Link to={`/events/${event.id}`} className={styles.btn}>
                  Click to know more
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcasts" className={styles.podcasts}>
          <h2 className={styles.podcastTitle}>Podcasts</h2>
          <div className={styles.eventList}>
            <div key={podcast.id} className={styles.eventCard}>
              <img src={podcast.image} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <p>
                <span>{podcast.date}</span>
                <span>{podcast.length}</span>
              </p>
              <a
                href="https://www.youtube.com/watch?v=sFbYHID_w2c"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                Listen now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
