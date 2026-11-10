/* ============================================================
   LEKTIONEN – neue PDFs werden hier als weiteres Objekt angehängt.
   Struktur: { id, fach, titel, quelle, sections:[ {nr, titel, cards:[{h, b}], quiz:[{q, o:[...], a:index, e}]} ] }
   ============================================================ */
window.LESSONS = [
{
  id:"informatik-1",
  fach:"Informatik",
  titel:"Kapitel 1 – Informatik Einführung",
  quelle:"Themenschwerpunkte „Digitaltechnik“, AUCOTEAM Berufsfachschule 2020/21, S. 7–21",
  sections:[
  {nr:"1.1", titel:"Was ist Informatik?",
   cards:[
    {h:"Definition der Informatik", b:`<p>Informatik ist die <b>Wissenschaft</b>, die sich mit der <b>automatischen Verarbeitung, Speicherung und Übermittlung</b> von Informationen und Daten mittels Rechenanlagen beschäftigt.</p>`},
    {h:"Symbolisch repräsentierte Information", b:`<p>Informatik ist die Disziplin der Verarbeitung <b>symbolisch repräsentierter Information</b>.</p><p>Diese Informationen werden als <b>Daten</b> mittels Zahlen, Zeichen oder anderer Symbole dargestellt.</p>`},
    {h:"Wurzeln der Informatik", b:`<p class="q">„Die Wurzeln der Informatik liegen im Bestreben des Menschen, geistige Tätigkeiten durch Werkzeuge und Maschinen zu erleichtern.“</p><p>(Autor unbekannt)</p>`},
    {h:"Inhalt der Informatik", b:`<p class="q">„In der Informatik geht es ebenso wenig um Computer, wie in der Astrophysik um Teleskope.“ – Edsger W. Dijkstra</p><ul><li>Informatik = <b>Information + Mathematik</b></li><li>engl. computer / computing science</li><li>Informatik ist eine <b>Ingenieurwissenschaft</b></li></ul>`},
    {h:"Informatik ist „exakt“", b:`<p>Im Gegensatz zur Physik oder Biologie braucht sie <b>keine empirischen Modelle</b> (aus Erfahrung, Beobachtung).</p><p>Es gibt nur <b>wahr oder falsch, Null oder Eins</b>.</p>`},
    {h:"Sonderstellung der Informatik", b:`<ul><li><b>vs. Naturwissenschaften:</b> betrachtet vom Menschen geschaffene Systeme und Strukturen</li><li><b>vs. Ingenieurwissenschaften:</b> untersucht immaterielle Produkte – Software ist nicht physisch greifbar, Nutzung erst mit materiellen Objekten möglich</li><li><b>vs. Geisteswissenschaften:</b> Ausrichtung auf praktisch anwendbare Ergebnisse, nicht nur Erkenntnisgewinn</li></ul>`},
    {h:"Anwendung der Informatik", b:`<ul><li><b>Banken, Versicherungen:</b> hohes Datenaufkommen, Finanzmathematik, Datenbanken, Großrechner, verteilte Arbeitsplätze</li><li><b>Forschung &amp; Entwicklung:</b> rechenintensives Unix-Umfeld, Parallel-Rechner, Number-Cruncher, Finite Elemente, FFT</li><li><b>Private Haushalte:</b> grafische Oberflächen, Web, Windows, Smartphones, Fernseher</li></ul>`}
   ],
   quiz:[
    {q:"Womit beschäftigt sich die Informatik laut Definition?", o:["Mit dem Bau von Teleskopen","Mit der automatischen Verarbeitung, Speicherung und Übermittlung von Informationen mittels Rechenanlagen","Nur mit der Reparatur von Computern","Mit empirischen Beobachtungen der Natur"], a:1, e:"Informatik ist die Wissenschaft der automatischen Verarbeitung, Speicherung und Übermittlung von Informationen und Daten mittels Rechenanlagen."},
    {q:"Informatik setzt sich zusammen aus …", o:["Information und Mathematik","Internet und Automatik","Informatik und Physik","Information und Elektronik"], a:0, e:"Informatik = Information und Mathematik."},
    {q:"Von wem stammt das Zitat über Computer und Teleskope?", o:["Konrad Zuse","John von Neumann","Edsger W. Dijkstra","Bill Gates"], a:2, e:"Edsger W. Dijkstra, ein bedeutender Informatiker."},
    {q:"Warum gilt die Informatik als „exakt“?", o:["Sie braucht empirische Modelle","Es gibt nur wahr oder falsch, Null oder Eins","Sie arbeitet nur mit Dezimalzahlen","Sie beschreibt nur Phänomene"], a:1, e:"Sie braucht keine empirischen Modelle – es gibt nur wahr oder falsch, Null oder Eins."},
    {q:"Wodurch unterscheidet sich die Informatik von den Ingenieurwissenschaften?", o:["Sie untersucht immaterielle Produkte","Sie ist auf reine Beschreibung beschränkt","Sie betrachtet nur die Natur","Sie hat keine praktischen Ergebnisse"], a:0, e:"Information und Software sind per se nicht physisch greifbar – also immaterielle Produkte."},
    {q:"Welcher Bereich wird mit „Number-Cruncher, Finite Elemente, FFT“ verbunden?", o:["Private Haushalte","Banken","Forschung und Entwicklung","Medizin"], a:2, e:"Forschung und Entwicklung: rechenintensives Unix-Umfeld, Parallel-Rechner, Number-Cruncher, Finite Elemente, FFT."}
   ]},

  {nr:"1.2", titel:"Teilgebiete der Informatik",
   cards:[
    {h:"Die vier Teilgebiete", b:`<ul><li><b>Theoretische Informatik</b> – Erforschung der theoretischen Grundlagen</li><li><b>Technische Informatik</b> – Konstruktion von Rechnern, Speicherchips, Prozessoren, Peripherie</li><li><b>Praktische Informatik</b> – Konstruktion von System- und Anwendungssoftware</li><li><b>Angewandte Informatik</b> – Einsatz von Rechnern in verschiedenen Anwendungsbereichen</li></ul>`},
    {h:"Theoretische Informatik", b:`<ul><li><b>Algorithmen:</b> Komplexitäts-, Berechenbarkeits-, Automatentheorie, Theorie der Datenstrukturen</li><li><b>Ersetzungssysteme und Kalküle:</b> formale Sprachen, Deduktions- und Transitionssysteme, Logik, Computer-Algebra</li><li><b>Theorie der Programmierung:</b> Programmiermethodik, Spezifikation, Verifikation, Semantik</li><li><b>Kommunikationstheorie:</b> Informations-, Codierungstheorie, Kryptographie</li></ul>`},
    {h:"Praktische Informatik", b:`<ul><li><b>Programmiersprachen &amp; -technik:</b> Sprachen, Umgebungen, Werkzeuge, Software Engineering</li><li><b>Informationssysteme:</b> Datenbanksysteme, betriebliche Informationssysteme, Datensicherheit</li><li><b>Systemsoftware:</b> Betriebssysteme, Echtzeitsysteme, verlässliche und verteilte Systeme</li><li><b>Dialogsysteme &amp; Computergrafik:</b> Kommunikationssysteme, Benutzerschnittstellen, CAD/CAM/CIM</li><li><b>Künstliche Intelligenz:</b> wissensbasierte Systeme, Lehr-/Lernsysteme, Bildverstehen, Robotik</li></ul>`},
    {h:"Technische Informatik", b:`<ul><li><b>Rechnerorganisation:</b> funktionaler Rechnerentwurf, Hardwarekomponenten, Modellierung und Simulation digitaler Systeme</li><li><b>Grundlagen &amp; Schaltungstechnik:</b> Schaltnetze und Schaltwerke, Entwurf für VLSI</li><li><b>Architekturkonzepte:</b> Multiprozessor- und Multirechnersysteme, Prozessrechner</li><li><b>Vernetzung:</b> Rechnernetze, verteilte Systeme, Telematik</li></ul>`},
    {h:"Angewandte Informatik", b:`<ul><li><b>Wirtschaftsinformatik:</b> volks- und betriebswirtschaftliche Anwendungen</li><li><b>Medizininformatik:</b> Unterstützung von Diagnose und Verwaltung</li><li><b>Ingenieurinformatik:</b> Elektrotechnik, Maschinenbau, Bauingenieurwesen</li><li><b>Natur- und Geisteswissenschaften:</b> Physik, Mathematik, Linguistik</li></ul>`}
   ],
   quiz:[
    {q:"Welches Teilgebiet beschäftigt sich mit der Konstruktion von Rechnern, Prozessoren und Speicherchips?", o:["Theoretische Informatik","Technische Informatik","Praktische Informatik","Angewandte Informatik"], a:1, e:"Technische Informatik: Konstruktion von Rechnern, Speicherchips, Prozessoren, Peripherie."},
    {q:"Zu welchem Teilgebiet gehört die Kryptographie?", o:["Angewandte Informatik","Technische Informatik","Theoretische Informatik (Kommunikationstheorie)","Praktische Informatik"], a:2, e:"Kommunikationstheorie (Informations-, Codierungstheorie, Kryptographie) gehört zur Theoretischen Informatik."},
    {q:"Betriebssysteme und Datenbanksysteme gehören zur …", o:["Praktischen Informatik","Theoretischen Informatik","Medizininformatik","Technischen Informatik"], a:0, e:"Praktische Informatik: Konstruktion von System- und Anwendungssoftware."},
    {q:"Künstliche Intelligenz (z.B. Robotik, Bildverstehen) zählt im Skript zur …", o:["Technischen Informatik","Praktischen Informatik","Angewandten Informatik","Theoretischen Informatik"], a:1, e:"KI steht im Skript unter Praktische Informatik."},
    {q:"Was ist Medizininformatik?", o:["Teil der Theoretischen Informatik","Unterstützung von Diagnose und Verwaltung (Angewandte Informatik)","Bau medizinischer Geräte (Technische Informatik)","Ein Betriebssystem"], a:1, e:"Medizininformatik gehört zur Angewandten Informatik: Unterstützung von Diagnose und Verwaltung."},
    {q:"Rechnernetze und Telematik gehören zu welchem Bereich?", o:["Vernetzung von Rechnersystemen (Technische Informatik)","Wirtschaftsinformatik","Theorie der Programmierung","Informationssysteme"], a:0, e:"Vernetzung von Rechnersystemen ist ein Bereich der Technischen Informatik."}
   ]},

  {nr:"1.3.1", titel:"Ursprung der Informatik",
   cards:[
    {h:"ca. 2000 v. Chr. – Abakus", b:`<p>Von den <b>Babyloniern</b> erfunden: Zählwerk aus beweglichen Kugeln.</p><p>Erlaubt Rechnen mit den <b>vier Grundrechenarten</b>.</p>`},
    {h:"1700 v. Chr. & 300 v. Chr.", b:`<ul><li><b>1700 v. Chr.:</b> Papyrus Rhind, Ägypten – älteste schriftliche Rechenaufgaben</li><li><b>300 v. Chr.:</b> Euklidischer Algorithmus – größter gemeinsamer Teiler zweier natürlicher Zahlen</li></ul>`},
    {h:"um 500 – Dezimalsystem", b:`<p>Erfindung des <b>Dezimalsystems in Indien</b>, Einführung der arabischen Ziffern (Skript: 5. Jh. n. Chr.).</p>`},
    {h:"820 – Al-Chowarizmi", b:`<p>Persischer Mathematiker und Astronom, schreibt ein Buch über <b>Algebra</b>.</p><p>Von seinem Namen leitet sich der Begriff <b>Algorithmus</b> ab.</p>`},
    {h:"1202 Fibonacci & 1524 Adam Riese", b:`<ul><li><b>1202:</b> Leonardo von Pisa (Fibonacci) verfasst den <i>liber abaci</i> – erste systematische Einführung in das dezimale Zahlenrechnen</li><li><b>1524:</b> Adam Riese veröffentlicht ein Rechenbuch mit den Rechengesetzen des Dezimalsystems – seitdem setzt sich das Dezimalsystem in Europa durch</li></ul>`}
   ],
   quiz:[
    {q:"Wer erfand den Abakus (ca. 2000 v. Chr.)?", o:["Die Ägypter","Die Babylonier","Die Griechen","Die Inder"], a:1, e:"Der Abakus wurde ca. 2000 v. Chr. von den Babyloniern erfunden."},
    {q:"Wovon leitet sich der Begriff „Algorithmus“ ab?", o:["Von Adam Riese","Vom Papyrus Rhind","Von Al-Chowarizmi","Von Euklid"], a:2, e:"Al-Chowarizmi, persischer Mathematiker (820), schrieb ein Buch über Algebra – davon leitet sich „Algorithmus“ ab."},
    {q:"Was berechnet der Euklidische Algorithmus?", o:["Die Quadratwurzel","Den größten gemeinsamen Teiler zweier natürlicher Zahlen","Primzahlen","Das kleinste gemeinsame Vielfache"], a:1, e:"Den größten gemeinsamen Teiler zweier natürlicher Zahlen (300 v. Chr.)."},
    {q:"Wo wurde das Dezimalsystem erfunden?", o:["In Indien","In Babylon","In Italien","In Ägypten"], a:0, e:"Um 500 in Indien."},
    {q:"Was ist der Papyrus Rhind?", o:["Ein Rechenbuch von Adam Riese","Die ältesten schriftlichen Rechenaufgaben (Ägypten, 1700 v. Chr.)","Ein Zählwerk mit Kugeln","Ein Buch über Algebra"], a:1, e:"1700 v. Chr., Ägypten: älteste schriftliche Rechenaufgaben."},
    {q:"Seit wem setzt sich das Dezimalsystem in Europa durch?", o:["Fibonacci (1202)","Adam Riese (1524)","Konrad Zuse (1934)","Al-Chowarizmi (820)"], a:1, e:"Adam Riese veröffentlichte 1524 ein Rechenbuch; seitdem setzt sich das Dezimalsystem in Europa durch."}
   ]},

  {nr:"1.3.3", titel:"Elektromechanische & elektronische Rechenmaschinen",
   cards:[
    {h:"1934 – Konrad Zuse: die Idee", b:`<p>Idee der <b>programmgesteuerten Rechenmaschine</b>, duale und Gleitkommazahlen.</p><p>Relaisrechner mit fest eingebauter Steuerung („festverdrahtetes Programm“).</p>`},
    {h:"1941 – Zuse Z3", b:`<ul><li>Erster funktionsfähiger <b>programmgesteuerter Rechenautomat</b></li><li>Programmeingabe über gelochte Filmstreifen</li><li>Unterprogramme als Lochstreifenschleifen</li><li><b>3000 Relais</b></li></ul>`},
    {h:"1944 – MARK I von Aiken", b:`<ul><li>Additionszeit 1/3 s, Multiplikationszeit 6 s</li><li>Zusammenschaltung von Lochkartenmaschinen</li><li>Länge 16 m, Gewicht 35 t</li><li>Weiterentwicklung zum Relaisrechner Mark II, <b>Dezimalsystem</b></li></ul>`},
    {h:"1945/46 – von Neumann & ENIAC", b:`<ul><li><b>1945:</b> J. von Neumann entwickelt das wesentliche Konzept heutiger Computer; schlägt das im Rechner gespeicherte Programm vor („speicherprogrammierte Rechenanlage“)</li><li><b>1946 ENIAC</b> (Eckert/Mauchly): erste voll elektronische Rechenanlage – 140 m², 30 t, 175 kW, <b>18.000 Elektronenröhren</b>, Multiplikation 3 ms, Steuerung durch Stecktafeln</li></ul>`},
    {h:"1947 bis ~1960", b:`<ul><li><b>1947:</b> Erfindung des Transistors</li><li><b>1949:</b> EDVAC (M. V. Wilkes) – erster universeller Digitalrechner mit binärer Codierung und einheitlichem Programm- und Datenspeicher (erster „von Neumann Rechner“)</li><li><b>ab 1950:</b> industrielle Rechnerproduktion</li><li><b>~1960:</b> IBM-Großrechner</li></ul>`}
   ],
   quiz:[
    {q:"Was baute Konrad Zuse 1941?", o:["Den ENIAC","Die Z3 – ersten funktionsfähigen programmgesteuerten Rechenautomaten","Den Mark I","Den ersten Transistor"], a:1, e:"1941: Z3, erster funktionsfähiger programmgesteuerter Rechenautomat mit 3000 Relais."},
    {q:"Wie viele Elektronenröhren hatte der ENIAC?", o:["3.000","18.000","1.000","175"], a:1, e:"18.000 Elektronenröhren, 140 m², 30 t, 175 kW."},
    {q:"Was schlug J. von Neumann vor?", o:["Die Lochkarte","Das im Rechner gespeicherte Programm (speicherprogrammierte Rechenanlage)","Den Abakus","Das Dezimalsystem"], a:1, e:"Von Neumann schlug das im Rechner gespeicherte Programm vor."},
    {q:"Wann wurde der Transistor erfunden?", o:["1934","1941","1947","1971"], a:2, e:"1947 Erfindung des Transistors."},
    {q:"Welches Zahlensystem nutzte der Mark I / Mark II von Aiken?", o:["Dualsystem","Dezimalsystem","Hexadezimalsystem","Gleitkommasystem"], a:1, e:"Der Mark von Aiken arbeitete mit dem Dezimalsystem."},
    {q:"Welcher Rechner gilt laut Skript als erster „von Neumann Rechner“ (1949)?", o:["ENIAC","Z3","EDVAC","IBM 360"], a:2, e:"EDVAC: erster universeller Digitalrechner mit binärer Codierung und einheitlichem Programm- und Datenspeicher."}
   ]},

  {nr:"1.3.4", titel:"Computergenerationen",
   cards:[
    {h:"Überblick: Generationen nach Schaltertechnik", b:`<p>Die Generationen werden nach der Technologie der elektronischen Schalter eingeteilt:</p><ul><li>Relais / Röhre</li><li>Transistor</li><li>integrierte Schaltkreise</li><li>hochintegrierte Schaltkreise</li></ul>`},
    {h:"1. Generation (ca. 1936 – Ende 50er)", b:`<ul><li><b>Relais und Elektronenröhren</b> als Schaltelemente</li><li>Pionier Konrad Zuse (Z1–Z4)</li><li>Speicher: wenige hundert Maschinenwörter, &lt;100 Zahlen</li><li>Additionszeit: <b>100–1000 μs</b></li><li>Programmiert mit Zahlenkolonnen, keine Software</li></ul>`},
    {h:"Maschinenwort", b:`<p>Als <b>Maschinenwort</b> (auch Binärwort, word) bezeichnet man eine geordnete Folge von Binärzeichen mit <b>fester Länge</b>.</p><p>Meist <b>2 Byte</b>.</p>`},
    {h:"2. Generation (bis Ende 60er)", b:`<ul><li>1947: erster Transistor in den Bell Labs (Bardeen, Brattain, Shockley)</li><li><b>Transistoren</b> ersetzen Röhren und Relais – kleiner, schneller, zuverlässiger</li><li>Speicher: Ferritkern-, Band-, Trommel-, Plattenspeicher</li><li>Additionszeit: <b>1–10 μs</b>, einige 1000 Zahlen</li><li>Assemblerprogrammierung, erste einfache Betriebssysteme</li><li>Jeder Computer ein Unikat, weltweit nur wenige 100</li></ul>`},
    {h:"3. Generation (seit Mitte 60er)", b:`<ul><li><b>Integrierte Schaltkreise</b>: 1000e Transistoren auf engstem Raum in Silizium</li><li>Einheitliche Standards, kleinere Bauformen, mehr Leistung</li><li>Serienmodelle: IBM 360, UNIVAC 9000</li><li>Siemens 4004: ausbaubar, <b>Kompatibilität</b></li><li><b>Timesharing</b> (Multiuser), erste Bildschirme, Lochkarten</li></ul>`},
    {h:"Timesharing & Lochkarte", b:`<p><b>Timesharing (Multiuser-Betrieb):</b> Rechenzeit im Rechenzentrum eines Betreibers kaufen, weil ein eigener Rechner zu teuer war (ähnlich Internet-Provider).</p><p><b>Lochkarte:</b> etwa Konzertticketgröße, Daten als gestanzte Lochmuster – erste Form mechanischer Speicher.</p>`},
    {h:"4. Generation (seit Anfang 70er)", b:`<ul><li>Überwiegend <b>hochintegrierte Schaltkreise</b></li><li><b>Mikroprozessor</b> = CPU auf einem Chip (4, später 8 Bit)</li><li>Home- und Personal-Computer → Dezentralisierung</li><li>Betriebssysteme <b>CP/M, MS-DOS, UNIX</b></li></ul><p><b>Formfaktor</b> = standardisiertes Baumaß bzw. Bauform in der Technik.</p>`},
    {h:"Intel 4004", b:`<ul><li>4-Bit-Mikroprozessor, am <b>15. November 1971</b> auf dem Markt</li><li>Erster in Serie produzierter und frei verkaufter Mikroprozessor</li><li>Nicht der allererste: Texas Instruments entwickelte 1968 einen als Auftragsarbeit (nie in Serie)</li></ul>`},
    {h:"5. Generation (seit Anfang 80er)", b:`<ul><li>Hochintegrierte Schaltkreise, Mikrocomputer auf einem Chip</li><li><b>Mehrere Prozessoren</b> auf einem Chip</li><li><b>16- und 32-Bit</b>-Architekturen</li><li>Lokale und globale Netze, neuronale Netze, parallele Multiprozessorsysteme</li><li>Multimedia</li><li>Abkehr von der von-Neumann-Architektur</li></ul>`}
   ],
   quiz:[
    {q:"Welche Schaltelemente nutzte die 1. Generation?", o:["Transistoren","Integrierte Schaltkreise","Relais und Elektronenröhren","Mikroprozessoren"], a:2, e:"1. Generation: Relais und Elektronenröhren."},
    {q:"Was ist ein Maschinenwort?", o:["Ein Befehl in Assembler","Eine geordnete Folge von Binärzeichen mit fester Länge, meist 2 Byte","Ein Wort in einer Programmiersprache","Ein Lochkartenmuster"], a:1, e:"Maschinenwort (Binärwort, word): geordnete Folge von Binärzeichen fester Länge, meist 2 Byte."},
    {q:"Typische Additionszeit der 2. Generation?", o:["100–1000 μs","1–10 μs","6 s","3 ms"], a:1, e:"1. Generation: 100–1000 μs; 2. Generation: 1–10 μs."},
    {q:"Wer brachte 1947 in den Bell Labs den ersten Transistor zum Laufen?", o:["Eckert und Mauchly","Bardeen, Brattain und Shockley","Zuse und Aiken","Gates und Allen"], a:1, e:"John Bardeen, Walter Brattain und William Shockley."},
    {q:"Welche Technik kennzeichnet die 3. Generation?", o:["Elektronenröhren","Integrierte Schaltkreise","Relais","Neuronale Netze"], a:1, e:"3. Generation: integrierte Schaltkreise (Mikroelektronik)."},
    {q:"Was bedeutet Timesharing?", o:["Rechenzeit im Rechenzentrum eines Betreibers kaufen (Multiuser-Betrieb)","Zwei Prozessoren auf einem Chip","Programme auf Lochkarten speichern","Zeitgleiches Drucken"], a:0, e:"Timesharing = Multiuser-Betrieb: Rechenzeit kaufen, da ein eigener Rechner zu teuer war."},
    {q:"Wann kam der Intel 4004 auf den Markt?", o:["15. November 1971","1968","1947","1985"], a:0, e:"Am 15. November 1971 – 4-Bit, erster in Serie produzierter Mikroprozessor."},
    {q:"Was ist ein Mikroprozessor?", o:["Ein Speicherchip","Rechnerkern (CPU) auf einem Chip","Eine Lochkarte","Ein Betriebssystem"], a:1, e:"Mikroprozessor = Rechnerkern CPU auf einem Chip (4. Generation)."},
    {q:"Welche Betriebssysteme nennt das Skript für die 4. Generation?", o:["Windows 10 und macOS","CP/M, MS-DOS und UNIX","Linux und Android","Mosaic und ARPANET"], a:1, e:"4. Generation: CP/M, MS-DOS und UNIX."},
    {q:"Was gehört zur 5. Generation?", o:["Relais","Mehrere Prozessoren auf einem Chip, 16-/32-Bit, Multimedia","Lochkartenstapel","Erste Transistoren"], a:1, e:"5. Generation (seit Anfang 80er): mehrere Prozessoren auf einem Chip, 16-/32-Bit, Netze, Multimedia."}
   ]},

  {nr:"1.3.5", titel:"Entwicklungen auf der Software-Seite",
   cards:[
    {h:"Hardware und Software gehören zusammen", b:`<p>Ein Computer ohne Programme (mindestens ein <b>Betriebssystem</b>) ist nicht funktionsfähig.</p><p>Die Software spiegelt den Stand der Hardware wider – mit jeder neuen Hardware-Generation kommen neue Programme.</p>`},
    {h:"Ende 50er / Anfang 60er", b:`<ul><li><b>Problemorientierte Programmiersprachen</b> (seit Ende 50er): für bestimmte Klassen von Problemen (Rechnen, Text, Grafik)</li><li><b>Betriebssysteme</b> (seit Anfang 60er): erst durch Standards und Serienproduktion möglich</li></ul>`},
    {h:"Ende 60er – Software-Engineering", b:`<p>Softwareentwicklung wird ein <b>eigenständiges Berufsfeld</b>.</p><p>Es entstehen Softwarefirmen, die nicht zwangsläufig auch Computer herstellen.</p>`},
    {h:"1970 – Unix und C", b:`<ul><li><b>Unix:</b> vielleicht leistungsstärkstes Betriebssystem für Server und Großrechner</li><li><b>C:</b> sehr leistungsstarke Programmiersprache, heute durch C++, Java etc. zurückgedrängt</li></ul>`},
    {h:"Seit Anfang 80er", b:`<ul><li><b>Objektorientierte Ansätze</b> – ohne sie wären heutige komplexe Programme (Win10, Photoshop) nicht möglich</li><li><b>Internet</b> – davor ARPANET (nicht öffentlich, eingeschränkter Nutzerkreis)</li><li><b>1985 Windows 1.0</b> – grafischer Aufsatz auf MS-DOS (Bill Gates)</li></ul>`},
    {h:"1989 WWW & 1993 Mosaic", b:`<ul><li><b>1989:</b> Das World-Wide-Web entsteht am <b>CERN</b> (Europäisches Forschungsinstitut für Physik und Kernforschung)</li><li><b>1993:</b> erster grafischer Web-Browser <b>Mosaic</b></li><li>Suchmaschinen und Multimedia → raketenmäßiger Aufstieg des Internets</li></ul>`}
   ],
   quiz:[
    {q:"Wann wurden Unix und C entwickelt?", o:["1960","1970","1985","1993"], a:1, e:"1970 Entwicklung von Unix und C."},
    {q:"Wo entstand 1989 das World-Wide-Web?", o:["Bell Labs","CERN","IBM","Microsoft"], a:1, e:"Am CERN, dem Europäischen Forschungsinstitut für Physik und Kernforschung."},
    {q:"Wie hieß der erste grafische Web-Browser (1993)?", o:["Firefox","Chrome","Mosaic","ARPANET"], a:2, e:"1993 erster grafischer Web-Browser: Mosaic."},
    {q:"Was war Windows 1.0 (1985)?", o:["Ein eigenständiges Betriebssystem ohne DOS","Ein grafischer Aufsatz zum Betriebssystem MS-DOS","Ein Web-Browser","Eine Programmiersprache"], a:1, e:"Windows 1.0 war ein grafischer Aufsatz zu MS-DOS."},
    {q:"Was war das ARPANET?", o:["Ein öffentliches Netz für alle","Ein nicht öffentliches Datennetz mit eingeschränktem Nutzerkreis","Ein Betriebssystem","Ein Browser"], a:1, e:"Vor dem Internet: ARPANET – nicht öffentliches Datennetz mit eingeschränktem Nutzerkreis."},
    {q:"Was bedeutet „Entstehung von Software-Engineering“ (Ende 60er)?", o:["Erfindung des Transistors","Softwareentwicklung wird ein eigenständiges Berufsfeld","Erste Lochkarten","Bau des ENIAC"], a:1, e:"Softwareentwicklung als eigenständiges Betätigungsgebiet; Softwarefirmen entstehen."}
   ]},

  {nr:"1.3.6", titel:"Entwicklung des PC",
   cards:[
    {h:"PC-Vergleich 1979 – 2000 – 2020", b:`<div class="tw"><table><tr><th></th><th>1979</th><th>2000</th><th>2020</th></tr><tr><td>Prozessor</td><td>Intel 8088</td><td>Pentium IV</td><td>AMD Ryzen 9 3900X</td></tr><tr><td>Takt</td><td>4,7 MHz</td><td>1,4 GHz</td><td>3,8 (4,6) GHz</td></tr><tr><td>RAM</td><td>64 KB</td><td>256 MB</td><td>16 GB</td></tr><tr><td>Platte</td><td>–</td><td>63 GB</td><td>4 TB</td></tr></table></div>`},
    {h:"PC-Vergleich: Speicher, Bildschirm, Transistoren", b:`<div class="tw"><table><tr><th></th><th>1979</th><th>2000</th><th>2020</th></tr><tr><td>ext. Speicher</td><td>5,25″ Floppy 360 KB</td><td>3,5″ Floppy 1,44 MB</td><td>1 TB SSD</td></tr><tr><td>Bildschirm</td><td>12″ monochrom</td><td>21″ VGA</td><td>32″ 4k</td></tr><tr><td>Transistoren</td><td>29.000</td><td>28.000.000</td><td>1,2 Mrd.</td></tr></table></div>`}
   ],
   quiz:[
    {q:"Welcher Prozessor steckte im PC von 1979?", o:["Intel 8088","Pentium IV","AMD Ryzen 9","Intel 4004"], a:0, e:"1979: Intel 8088 mit 4,7 MHz."},
    {q:"Wie viel Hauptspeicher hatte der PC im Jahr 2000?", o:["64 KB","256 MB","16 GB","1,44 MB"], a:1, e:"2000: 256 MB Hauptspeicher."},
    {q:"Wie viele Transistoren hatte der Prozessor 1979?", o:["29.000","28.000.000","1,2 Milliarden","3.000"], a:0, e:"1979: 29.000 Transistoren."},
    {q:"Welcher externe Speicher gehört zum Jahr 2000?", o:["5,25″ Floppy 360 KB","3,5″ Floppy 1,44 MB","1 TB SSD","Lochkarte"], a:1, e:"2000: 3,5″ Floppy mit 1,44 MB."}
   ]},

  {nr:"1.4 a", titel:"Information, Daten und das Bit",
   cards:[
    {h:"Information und Daten", b:`<p>Die Informationen der <b>Wirklichkeit</b> werden im Modell als <b>Daten</b> repräsentiert.</p><p>Die Wirklichkeit hat einen unendlichen Wertevorrat und muss deshalb in einem <b>endlichen Modell</b> aus Daten beschrieben werden. Kein Computer könnte die Wirklichkeit so berechnen, wie sie ist.</p>`},
    {h:"Digital und diskret", b:`<p>In Rechnern werden Daten immer durch <b>Binärfolgen von Nullen und Einsen</b> dargestellt (digital).</p><p>Die Daten sind daher immer <b>diskret</b> – eingeschränkt umfänglich bzw. auf das Wesentliche reduziert.</p>`},
    {h:"Das Bit", b:`<p>Das kleinste Datum am Computer ist das <b>Bit</b> mit den Werten <b>0 oder 1</b>.</p><p>Physische Darstellung:</p><ul><li>elektr. Speicher: 0 = 0–0,7 V, 1 = 4,3–5 V</li><li>magn. Festplatte: 0 = unmagnetisiert, 1 = magnetisiert</li><li>mech. Lochkarte: 0 = kein Loch, 1 = Loch</li></ul>`},
    {h:"Interpretation eines Bits", b:`<p>Die Bedeutung hängt vom <b>Kontext</b> ab:</p><ul><li>Logik: 0 = falsch, 1 = wahr</li><li>Schach: 0 = schwarz, 1 = weiß</li><li>Landkarte: 0 = unten, 1 = oben / 0 = links, 1 = rechts</li></ul><p>Daher keine Daten mit unterschiedlichem Informationsgehalt vermischen.</p>`}
   ],
   quiz:[
    {q:"Was ist das kleinste Datum am Computer?", o:["Das Byte","Das Bit","Das Maschinenwort","Das Zeichen"], a:1, e:"Das Bit mit den beiden möglichen Werten 0 oder 1."},
    {q:"Welcher Spannungsbereich steht im elektr. Speicher für die 1?", o:["0–0,7 Volt","4,3–5 Volt","220 Volt","1–2 Volt"], a:1, e:"1 = 4,3–5 Volt, 0 = 0–0,7 Volt."},
    {q:"Wie wird eine 1 auf einer Lochkarte dargestellt?", o:["Kein Loch","Loch","Magnetisiert","Spannung"], a:1, e:"Mech. Lochkarte: 0 = kein Loch, 1 = Loch."},
    {q:"Warum muss die Wirklichkeit in einem endlichen Modell aus Daten beschrieben werden?", o:["Weil Computer zu langsam sind","Weil die Wirklichkeit einen unendlichen Wertevorrat hat","Weil es nur Dezimalzahlen gibt","Weil Daten analog sind"], a:1, e:"Die Wirklichkeit hat einen unendlichen Wertevorrat; ein Computer müsste unendlich leistungsstark sein."},
    {q:"Rechnerdaten sind prinzipiell immer …", o:["analog","diskret","unendlich","kontinuierlich"], a:1, e:"Digital und daher diskret (auf das Wesentliche reduziert)."}
   ]},

  {nr:"1.4 b", titel:"Signal, Nachricht, Information",
   cards:[
    {h:"Signal", b:`<p><b>Signal</b> = Veränderung physikalischer Größen, um etwas mitzuteilen.</p><ul><li>Ertasten: Braillezeile verformt die Haut der Finger</li><li>Vorlesen: Schallwellen gelangen zu den Ohren</li><li>Lesen: Licht gelangt vom Papier in die Augen</li></ul><p>Manchmal werden mehrere Signale genutzt (z.B. Musikvideo).</p>`},
    {h:"Übertragung und Speicherung", b:`<p>Übertragung von A nach B braucht Zeit.</p><p>Die <b>Speicherung</b> ist ein anderer „Transport in der Zeit“ – dafür muss die Mitteilung abstrahiert werden.</p><p>Beispiele: Höhle/Pinsel, Papier/Stift, Eisen/Magnet.</p>`},
    {h:"Nachricht", b:`<p>Eine <b>Nachricht</b> ist eine Folge von Zeichen, die von einem <b>Sender (Quelle)</b> zu einem <b>Empfänger (Senke)</b> übermittelt wird.</p><p>Sie ist unabhängig von Signal und Speichermethode.</p><p>Man kann Nachrichten <b>speichern, übertragen, verarbeiten</b>.</p>`},
    {h:"Information", b:`<p><b>Information = Bedeutung einer Nachricht bei Interpretation.</b></p><p>Die Interpretation hängt vom „Bezugssystem“ ab. Beispiel <b>1000001</b>:</p><ul><li>einemillioneins (Dezimalzahl)</li><li>fünfundsechzig (Binärzahl)</li><li>großes A (ASCII)</li></ul>`},
    {h:"Computer verarbeiten Nachrichten", b:`<p>Rechner haben „keine Ahnung“ von Interpretationen. Sie verarbeiten <b>Nachrichten, keine Informationen</b>.</p><p>Trotzdem ist das sinnvoll: Die Transformation von Eingabe- zu Ausgabenachrichten passt bei festgelegter Interpretation zur beabsichtigten Informationsverarbeitung.</p>`}
   ],
   quiz:[
    {q:"Was ist ein Signal?", o:["Die Bedeutung einer Nachricht","Veränderung physikalischer Größen, um etwas mitzuteilen","Eine Folge von Zeichen","Ein Datenträger"], a:1, e:"Signal = Veränderung physikalischer Größen, um etwas mitzuteilen."},
    {q:"Was ist Information?", o:["Eine Folge von Zeichen","Die Bedeutung einer Nachricht bei Interpretation","Ein Bit","Eine Spannung"], a:1, e:"Information = Bedeutung einer Nachricht bei Interpretation."},
    {q:"Was bedeutet 1000001 als ASCII?", o:["einemillioneins","fünfundsechzig","großes A","kleines a"], a:2, e:"Dezimal: einemillioneins, binär: 65, ASCII: großes A."},
    {q:"Was verarbeiten Computer laut Skript?", o:["Informationen","Nachrichten","Interpretationen","Bedeutungen"], a:1, e:"Rechner haben keine Ahnung von Interpretationen – sie verarbeiten Nachrichten, keine Informationen."},
    {q:"Was kann man mit Nachrichten machen?", o:["Nur speichern","Speichern, übertragen, verarbeiten","Nur interpretieren","Nur senden"], a:1, e:"Speichern, übertragen, verarbeiten."},
    {q:"Wie heißen Sender und Empfänger einer Nachricht noch?", o:["Quelle und Senke","Eingabe und Ausgabe","Signal und Datum","Bit und Byte"], a:0, e:"Sender = Quelle, Empfänger = Senke."}
   ]},

  {nr:"1.4 c", titel:"Arten von Daten",
   cards:[
    {h:"Einteilung von Informationen", b:`<ul><li><b>Erscheinungsform:</b> Schrift, Ton, Bild</li><li><b>Repräsentationsform:</b> digital, analog</li><li><b>Aufgabe im Verarbeitungsprozess:</b> Steuerdaten, Nutzdaten</li></ul>`},
    {h:"Daten & Datenträger", b:`<p><b>Daten</b> stellen Informationen (Angaben über Sachverhalte und Vorgänge) aufgrund bekannter oder unterstellter Abmachungen in <b>maschinell verarbeitbarer Form</b> dar.</p><p>Ein Mittel, auf dem Daten aufbewahrt werden, ist ein <b>Datenträger</b>.</p>`},
    {h:"Formatierte vs. unformatierte Daten", b:`<ul><li><b>Formatierte Daten:</b> nach einer bestimmten, für die Maschine geeigneten Zeichenstruktur aufgebaut (Datenbanklisten, Quelltexte)</li><li><b>Unformatierte Daten / Texte:</b> schriftliche Informationen ohne diese Struktur – z.B. ein Brief</li></ul>`},
    {h:"Analoge Daten", b:`<ul><li>durch eine <b>kontinuierliche</b> Funktion repräsentiert (an jeder Stelle definiert)</li><li>physikalische Größe ändert sich <b>stufenlos</b></li><li>Beispiel: <b>Quecksilberthermometer</b></li></ul>`},
    {h:"Digitale Daten", b:`<ul><li>Größen werden durch <b>Zeichen</b> aus einem definierten, <b>endlichen Zeichenvorrat</b> dargestellt</li><li>Beispiel: <b>Digitalthermometer</b> mit 0,5 °C-Schritten – Zwischenwerte wie 37,2 °C nicht darstellbar</li><li>Digitalisierung: Raster aus Werten → gewisser Informationsverlust</li></ul>`},
    {h:"Nur digital im Rechner", b:`<p>In der EDV interessieren nur <b>digitale Daten</b>, da ein Rechner technisch nur solche verarbeiten kann.</p><p>Analoge Daten (z.B. menschliche Sprache) müssen vorher <b>digitalisiert</b> werden.</p><p>Beispiele: Schrift (formatierte Daten, Text), Sprache (gehört / synthetisch), Bild (gezeichnet / digitales Foto).</p>`}
   ],
   quiz:[
    {q:"Welches Beispiel nennt das Skript für analoge Daten?", o:["Digitalthermometer","Quecksilberthermometer","Lochkarte","ASCII-Tabelle"], a:1, e:"Quecksilberthermometer: die Säule steigt und fällt stufenlos."},
    {q:"Was kennzeichnet digitale Daten?", o:["Stufenlose Änderung","Zeichen aus einem definierten, endlichen Zeichenvorrat","Kontinuierliche Funktion","Unendlicher Wertevorrat"], a:1, e:"Digital: physikalische Größen durch Zeichen aus einem endlichen Zeichenvorrat dargestellt."},
    {q:"Was ist ein Datenträger?", o:["Ein Mittel, auf dem Daten aufbewahrt werden","Ein Programm","Eine Nachricht","Ein Signal"], a:0, e:"Ein Mittel, auf dem Daten aufbewahrt werden können, heißt Datenträger."},
    {q:"Ein Brief ist ein Beispiel für …", o:["formatierte Daten","unformatierte Daten (Text)","Steuerdaten","analoge Daten"], a:1, e:"Schriftliche Informationen ohne maschinengeeignete Struktur sind unformatierte Daten bzw. Texte."},
    {q:"Nach der Aufgabe im Verarbeitungsprozess unterscheidet man …", o:["Schrift, Ton, Bild","digital und analog","Steuerdaten und Nutzdaten","formatiert und unformatiert"], a:2, e:"Aufgabe im Verarbeitungsprozess: Steuerdaten und Nutzdaten."},
    {q:"Was passiert mit analogen Daten wie Sprache, bevor ein Rechner sie bearbeiten kann?", o:["Nichts","Sie werden digitalisiert","Sie werden gedruckt","Sie werden gelöscht"], a:1, e:"Analoge Daten müssen digitalisiert werden."}
   ]},

  {nr:"1.4 d", titel:"Datenverarbeitung, Computer, Programm",
   cards:[
    {h:"Datenverarbeitung", b:`<p>Jeder Vorgang der <b>Erfassung, Speicherung, Übertragung oder Transformation</b> von Daten.</p><p><b>Transformation</b> = Identifizieren (Zuordnen), Rekombinieren, Vergleichen, Umformen bzw. Berechnen.</p><p>Hilfsmittel: manuell (Papier, Bleistift, Kopfrechnen) oder maschinell (Taschenrechner, PC, Großrechner).</p>`},
    {h:"Datenverarbeitungssystem", b:`<p>Funktionseinheit zur Verarbeitung von Daten – zur Durchführung <b>mathematischer, umformender, übertragender und speichernder</b> Operationen.</p><p>Synonyme: Rechner, Rechnersystem, Rechenanlage, Computer.</p>`},
    {h:"Computer", b:`<p>engl. <i>to compute</i> = rechnen; lat. <i>computare</i> = berechnen.</p><p>Informatik-Duden: <b>Universell einsetzbares Gerät zur automatischen Verarbeitung von Daten.</b></p><p>Im Alltag: berechnet Steuern, hilft beim Briefeschreiben, kontrolliert Autos, analysiert Daten.</p>`},
    {h:"Programm", b:`<p>Eine zur Lösung einer Aufgabe <b>vollständige Anweisung</b> (Verarbeitungsvorschrift), so präzise, dass eine Datenverarbeitungsanlage sie ausführen kann.</p><ul><li>Synonym: <b>Algorithmus</b> – logische Reihenfolge von Schritten zur Lösung eines Problems</li><li>Erstellen = <b>Programmieren</b></li><li>Inhalt eines Programms = <b>Code</b></li><li>Computer führen Programme aus</li></ul>`},
    {h:"Programmiersprache", b:`<p>Arbeitsanweisungen an eine <b>EDVA</b> (Datenverarbeitungsanlage) in einer von der Maschine interpretierbaren Sprache.</p><ul><li>Assembler</li><li>Delphi, C, PASCAL</li><li>Java, PHP, JavaScript</li></ul><p>Jede Sprache ist für eine <b>Klasse von Problemen</b> gemacht: manche rechnen gut, manche verarbeiten große Datenmengen, andere sind fürs Web.</p>`}
   ],
   quiz:[
    {q:"Was gehört zur Datenverarbeitung?", o:["Nur das Berechnen","Erfassung, Speicherung, Übertragung oder Transformation von Daten","Nur das Speichern","Nur das Drucken"], a:1, e:"Datenverarbeitung: jeder Vorgang der Erfassung, Speicherung, Übertragung oder Transformation von Daten."},
    {q:"Wie definiert der Informatik-Duden den Computer?", o:["Gerät nur zum Rechnen von Steuern","Universell einsetzbares Gerät zur automatischen Verarbeitung von Daten","Eine Programmiersprache","Ein Datenträger"], a:1, e:"Universell einsetzbares Gerät zur automatischen Verarbeitung von Daten."},
    {q:"Welches Synonym nennt das Skript für „Programm“?", o:["Code","Algorithmus","Computer","Datenträger"], a:1, e:"Algorithmus – logische Reihenfolge von notwendigen Schritten zur Lösung eines Problems."},
    {q:"Was ist der Inhalt eines Programms?", o:["Der Code","Die Hardware","Das Signal","Der Datenträger"], a:0, e:"Der Inhalt eines Programms ist der Code."},
    {q:"Wofür steht EDVA?", o:["Elektronische Datenverarbeitungsanlage / Datenverarbeitungsanlage","Externe Datenverbindung","Elektrische Drucker-Anlage","Erste Digitale Version A"], a:0, e:"EDVA = (elektronische) Datenverarbeitungsanlage."},
    {q:"Was zählt NICHT zur „Transformation“ von Daten?", o:["Vergleichen","Umformen","Berechnen","Ausdrucken auf Papier"], a:3, e:"Transformation = Identifizieren, Rekombinieren, Vergleichen, Umformen bzw. Berechnen."}
   ]}
  ]
}
];

/* ===== ENGLISCH – Classpaper 10.11. ===== */
window.LESSONS.push({
  id:"englisch-classpaper-1011",
  fach:"Englisch",
  titel:"Classpaper 10.11. – Tenses, Office, Passive",
  quelle:"Themen laut Classpaper-Liste vom 10.11. (Present tense, The Office, tense switch, active/passive, past questions, past perfect, used to)",
  sections:[
  {nr:"1", titel:"Present Simple",
   cards:[
    {h:"When do we use the present simple?", b:`<ul><li><b>Habits / routines:</b> <i>I check my emails every morning.</i></li><li><b>Facts / things that are always true:</b> <i>Water boils at 100 °C.</i></li><li><b>Timetables:</b> <i>The meeting starts at 9.</i></li></ul><p>German hint: <b>allgemein, immer, regelmäßig</b>.</p>`},
    {h:"Form: positive sentences", b:`<p>I / you / we / they + <b>verb</b><br>he / she / it + <b>verb + s</b></p><ul><li>I <b>work</b> in an office.</li><li>She <b>works</b> in an office.</li></ul><p class="q">he, she, it – das „s“ muss mit!</p>`},
    {h:"Spelling of the he/she/it form", b:`<ul><li>most verbs: + s → works, reads</li><li>-s, -sh, -ch, -x, -o: + <b>es</b> → watches, fixes, goes, does</li><li>consonant + y: y → <b>ies</b> → study → studies, carry → carries</li><li>vowel + y: + s → plays, buys</li><li>have → <b>has</b></li></ul>`},
    {h:"Negatives: don't / doesn't", b:`<p>I / you / we / they + <b>don't</b> + verb<br>he / she / it + <b>doesn't</b> + verb</p><ul><li>We <b>don't work</b> on Sundays.</li><li>He <b>doesn't work</b> on Sundays. (NOT: doesn't works)</li></ul><p>After doesn't the verb has <b>no -s</b>.</p>`},
    {h:"Questions: do / does", b:`<p><b>Do</b> + I/you/we/they + verb?<br><b>Does</b> + he/she/it + verb?</p><ul><li><b>Do</b> you <b>like</b> your job?</li><li><b>Does</b> she <b>answer</b> the phone? (NOT: Does she answers)</li><li>Where <b>does</b> he <b>work</b>?</li></ul><p>Short answers: Yes, I do. / No, she doesn't.</p>`},
    {h:"Signal words – present simple", b:`<p><b>always, usually, often, sometimes, rarely, never, every day/week, on Mondays, once a week</b></p><p>Adverbs of frequency stand <b>before the main verb</b> but <b>after be</b>:</p><ul><li>She <b>often</b> works late.</li><li>He is <b>always</b> on time.</li></ul>`}
   ],
   quiz:[
    {q:"My boss ___ coffee every morning.", o:["drinks","drink","is drinking","drinking"], a:0, e:"he/she/it + verb + s; 'every morning' = routine → present simple: drinks."},
    {q:"Which sentence is correct?", o:["She doesn't works on Fridays.","She don't work on Fridays.","She doesn't work on Fridays.","She not works on Fridays."], a:2, e:"he/she/it → doesn't + infinitive (no -s): She doesn't work."},
    {q:"___ your colleague speak English?", o:["Do","Does","Is","Has"], a:1, e:"Question with he/she/it → Does + verb."},
    {q:"The receptionist ___ the phone.", o:["answer","answers","answeres","is answer"], a:1, e:"he/she/it + s → answers."},
    {q:"He ___ (watch) the news every evening.", o:["watchs","watches","watch","is watch"], a:1, e:"Verbs ending in -ch get -es: watches."},
    {q:"She ___ (study) English at school.", o:["studys","studyes","studies","study"], a:2, e:"consonant + y → ies: studies."},
    {q:"Where is the frequency adverb correct?", o:["He goes always to work by bus.","He always goes to work by bus.","Always he goes to work by bus.","He goes to work always by bus."], a:1, e:"Adverbs of frequency come before the main verb: He always goes…"},
    {q:"Which sentence is correct?", o:["She is never late.","She never is late.","Never she is late.","She is late never."], a:0, e:"With 'be', the adverb comes after be: She is never late."},
    {q:"Which is a FACT (present simple)?", o:["The sun rises in the east.","The sun is rising now.","The sun rised.","The sun rising."], a:0, e:"Facts that are always true use the present simple."},
    {q:"Where ___ they work?", o:["does","do","are","is"], a:1, e:"they → do: Where do they work?"},
    {q:"Short answer: 'Does Tom work here?' – 'Yes, he ___.'", o:["do","does","is","works"], a:1, e:"Short answer repeats the auxiliary: Yes, he does."},
    {q:"The train ___ at 7:15 tomorrow. (timetable)", o:["leaves","is leave","leave","leaving"], a:0, e:"Timetables use the present simple: The train leaves at 7:15."}
   ]},

  {nr:"2", titel:"Tense switch: Simple ↔ Continuous (Office)",
   cards:[
    {h:"The big idea", b:`<ul><li><b>Present simple</b> = <b>allgemein</b> (in general, always, regularly)</li><li><b>Present continuous</b> = <b>gerade</b> (right now, at the moment)</li></ul><p><i>Anna <b>works</b> in sales.</i> (her job in general)<br><i>Anna <b>is working</b> on a report right now.</i> (at this moment)</p>`},
    {h:"Form of the present continuous", b:`<p><b>am / is / are + verb-ing</b></p><ul><li>I <b>am</b> writ<b>ing</b> an email.</li><li>She <b>is</b> talk<b>ing</b> on the phone.</li><li>They <b>are</b> hav<b>ing</b> a meeting.</li></ul><p>Negative: She <b>isn't</b> working. Question: <b>Is</b> she working?</p>`},
    {h:"-ing spelling", b:`<ul><li>most verbs: work → work<b>ing</b></li><li>-e at the end: write → wri<b>ting</b>, make → ma<b>king</b></li><li>short verb, consonant-vowel-consonant: sit → si<b>tt</b>ing, run → ru<b>nn</b>ing, stop → sto<b>pp</b>ing</li><li>-ie: lie → l<b>ying</b></li></ul>`},
    {h:"Signal words", b:`<p><b>Simple (allgemein):</b> always, usually, often, every day, never, on Mondays</p><p><b>Continuous (gerade):</b> now, right now, at the moment, today, currently, Look! Listen!</p>`},
    {h:"How to switch (Office example)", b:`<p>Change <b>verb + s</b> → <b>is + verb-ing</b> and the signal word:</p><ul><li>The secretary usually <b>types</b> letters.<br>→ Right now she <b>is typing</b> a letter.</li><li>The manager often <b>leads</b> meetings.<br>→ At the moment he <b>is leading</b> a meeting.</li><li>We normally <b>don't work</b> late.<br>→ Today we <b>are working</b> late.</li></ul>`},
    {h:"State verbs – no -ing!", b:`<p>These verbs describe states, not actions, and are normally <b>not</b> used in the continuous:</p><p><b>know, like, love, hate, want, need, believe, understand, mean, own, belong, seem</b></p><ul><li>✔ I <b>know</b> the answer now.</li><li>✘ I am knowing the answer.</li></ul>`}
   ],
   quiz:[
    {q:"Look! The IT technician ___ the printer.", o:["repairs","is repairing","repair","repaired"], a:1, e:"'Look!' = happening right now → present continuous."},
    {q:"The accountant ___ the company's money. (her job)", o:["is managing always","manages","is manage","managing"], a:1, e:"Her job in general → present simple: manages."},
    {q:"Switch to 'right now': 'The receptionist answers the phone.'", o:["The receptionist is answering the phone right now.","The receptionist answer the phone right now.","The receptionist answering the phone right now.","The receptionist is answer the phone right now."], a:0, e:"is + verb-ing: is answering."},
    {q:"At the moment we ___ a meeting.", o:["have","has","are having","having"], a:2, e:"'At the moment' → present continuous: are having."},
    {q:"She usually ___ to work by train, but today she ___ by car.", o:["goes / is driving","is going / drives","go / drive","goes / drives"], a:0, e:"usually → simple (goes); today → continuous (is driving)."},
    {q:"Which sentence is WRONG?", o:["I know the answer.","I am knowing the answer.","She likes her job.","They need a new printer."], a:1, e:"'know' is a state verb – not used with -ing."},
    {q:"What is the -ing form of 'write'?", o:["writeing","writting","writing","wroteing"], a:2, e:"Drop the -e: write → writing."},
    {q:"What is the -ing form of 'sit'?", o:["siting","sitting","sitteing","sat"], a:1, e:"Short verb consonant-vowel-consonant: double the consonant → sitting."},
    {q:"Which word is a signal for the present continuous?", o:["every day","usually","right now","never"], a:2, e:"right now / at the moment / now → continuous."},
    {q:"___ the manager talking to a client now?", o:["Does","Do","Is","Are"], a:2, e:"Question in present continuous: Is + subject + -ing."},
    {q:"He ___ (not / work) today because he is ill.", o:["doesn't work","isn't working","not working","don't working"], a:1, e:"'today' + temporary situation → isn't working."},
    {q:"The secretary ___ appointments for the boss every week.", o:["is making","makes","make","making"], a:1, e:"'every week' → routine → present simple: makes."},
    {q:"Listen! Someone ___ in the meeting room.", o:["shouts","is shouting","shout","shouted"], a:1, e:"'Listen!' → happening now → is shouting."},
    {q:"Switch to 'in general': 'Tom is printing the documents right now.'", o:["Tom usually prints the documents.","Tom usually is printing the documents.","Tom usually print the documents.","Tom prints usually the documents."], a:0, e:"Simple: verb + s, adverb before the verb: usually prints."}
   ]},

  {nr:"3", titel:"Vocabulary: The Office (who does what)",
   cards:[
    {h:"Receptionist & Secretary", b:`<ul><li><b>receptionist</b> (Empfangsmitarbeiter/in): greets visitors, answers the phone, works at the front desk / reception</li><li><b>secretary / personal assistant (PA)</b> (Sekretär/in): types letters, organises the boss's diary, makes appointments, files documents</li></ul>`},
    {h:"Manager & Boss", b:`<ul><li><b>manager</b> (Leiter/in): leads a team or department, makes decisions, plans work, leads meetings</li><li><b>boss / head of department</b> (Chef/in, Abteilungsleiter/in)</li><li><b>CEO</b> (Geschäftsführer/in): runs the whole company</li></ul>`},
    {h:"Accountant & HR", b:`<ul><li><b>accountant</b> (Buchhalter/in): looks after the money, does the accounts, pays bills and salaries</li><li><b>HR manager / personnel manager</b> (Personalchef/in): hires new staff, looks after employees, organises training</li></ul>`},
    {h:"IT, Sales & more", b:`<ul><li><b>IT technician</b> (IT-Techniker/in): fixes computers and printers, sets up the network</li><li><b>sales representative / sales rep</b> (Vertriebsmitarbeiter/in): sells products, visits customers</li><li><b>cleaner</b> (Reinigungskraft): cleans the offices</li><li><b>intern / trainee</b> (Praktikant/in, Azubi)</li><li><b>colleague</b> (Kollege/Kollegin)</li></ul>`},
    {h:"Office objects", b:`<ul><li><b>desk</b> – Schreibtisch</li><li><b>photocopier</b> – Kopierer</li><li><b>printer</b> – Drucker</li><li><b>stapler</b> – Tacker</li><li><b>hole punch</b> – Locher</li><li><b>filing cabinet</b> – Aktenschrank</li><li><b>folder / file</b> – Ordner / Akte</li><li><b>notepad</b> – Notizblock</li></ul>`},
    {h:"Office actions (phrases)", b:`<ul><li><b>attend a meeting</b> – an einem Meeting teilnehmen</li><li><b>meet a deadline</b> – eine Frist einhalten</li><li><b>make a phone call</b> – telefonieren</li><li><b>make copies</b> – Kopien machen</li><li><b>file documents</b> – Dokumente ablegen</li><li><b>take notes</b> – Notizen machen</li><li><b>make an appointment</b> – einen Termin vereinbaren</li><li><b>apply for a job</b> – sich bewerben</li></ul>`}
   ],
   quiz:[
    {q:"Who greets visitors and answers the phone at the front desk?", o:["the accountant","the receptionist","the IT technician","the cleaner"], a:1, e:"The receptionist works at reception, greets visitors and answers the phone."},
    {q:"Who looks after the company's money and pays the bills?", o:["the accountant","the sales rep","the receptionist","the intern"], a:0, e:"The accountant does the accounts and pays bills and salaries."},
    {q:"Who fixes computers and printers?", o:["the HR manager","the secretary","the IT technician","the CEO"], a:2, e:"The IT technician fixes computers and the network."},
    {q:"Who hires new staff?", o:["the HR manager","the cleaner","the accountant","the receptionist"], a:0, e:"HR (human resources / personnel) hires and looks after employees."},
    {q:"Who organises the boss's diary and makes appointments?", o:["the sales rep","the secretary / PA","the IT technician","the cleaner"], a:1, e:"The secretary or personal assistant (PA) organises the diary."},
    {q:"Who sells products and visits customers?", o:["the accountant","the sales representative","the receptionist","the HR manager"], a:1, e:"Sales rep = Vertriebsmitarbeiter/in."},
    {q:"What is a 'stapler' in German?", o:["Locher","Tacker","Ordner","Drucker"], a:1, e:"stapler = Tacker; hole punch = Locher."},
    {q:"What is a 'filing cabinet'?", o:["Kopierer","Aktenschrank","Schreibtisch","Notizblock"], a:1, e:"filing cabinet = Aktenschrank."},
    {q:"'Eine Frist einhalten' in English is …", o:["make a deadline","meet a deadline","do a deadline","hold a deadline"], a:1, e:"to meet a deadline."},
    {q:"Which machine makes copies of documents?", o:["photocopier","stapler","hole punch","notepad"], a:0, e:"photocopier = Kopierer."},
    {q:"'Kollege' in English is …", o:["college","colleague","collector","client"], a:1, e:"colleague = Kollege/Kollegin (college = Hochschule!)."},
    {q:"Who leads a team and makes decisions?", o:["the manager","the intern","the cleaner","the receptionist"], a:0, e:"The manager leads a team or department."},
    {q:"'an einem Meeting teilnehmen' =", o:["attend a meeting","visit a meeting","take a meeting part","join to a meeting"], a:0, e:"to attend a meeting."},
    {q:"What is a 'trainee / intern'?", o:["Chef","Praktikant/Azubi","Kunde","Buchhalter"], a:1, e:"intern / trainee = Praktikant/in, Auszubildende/r."}
   ]},

  {nr:"4", titel:"Active & Passive",
   cards:[
    {h:"Active vs. passive", b:`<ul><li><b>Active:</b> the subject <b>does</b> the action.<br><i>The secretary <u>writes</u> the letters.</i></li><li><b>Passive:</b> the subject <b>receives</b> the action. The action is more important than who does it.<br><i>The letters <u>are written</u> (by the secretary).</i></li></ul>`},
    {h:"Form of the passive", b:`<p><b>form of BE + past participle (3rd form)</b></p><ul><li>present: <b>is / are</b> + written</li><li>past: <b>was / were</b> + written</li><li>present perfect: <b>has / have been</b> + written</li><li>future: <b>will be</b> + written</li><li>with modals: <b>can / must be</b> + written</li></ul>`},
    {h:"How to find (underline) the passive", b:`<p>Look for <b>be</b> (is, are, was, were, been, be) <b>+ 3rd form</b> of a verb. Underline both parts!</p><ul><li>The office <u>is cleaned</u> every evening. → passive</li><li>The cleaner <u>cleans</u> the office. → active</li><li>She <u>is cleaning</u> the office. → active! (be + -ing = continuous, not passive)</li></ul>`},
    {h:"Active → passive in 3 steps", b:`<p><i>The manager <b>signs</b> the contracts.</i></p><ol><li>Object becomes subject: <b>The contracts</b></li><li>Same tense of BE + 3rd form: <b>are signed</b></li><li>Old subject with <b>by</b> (optional): <b>by the manager</b></li></ol><p>→ <i>The contracts are signed by the manager.</i></p>`},
    {h:"Tense stays the same!", b:`<ul><li>Active past: Van Gogh <b>painted</b> the picture.<br>→ Passive past: The picture <b>was painted</b> by Van Gogh.</li><li>Active present: They <b>make</b> cars here.<br>→ Passive present: Cars <b>are made</b> here.</li></ul><p>Use <b>by</b> only when it is important who did it.</p>`},
    {h:"Important past participles", b:`<p>write – wrote – <b>written</b> · send – sent – <b>sent</b> · make – made – <b>made</b> · build – built – <b>built</b> · give – gave – <b>given</b> · take – took – <b>taken</b> · see – saw – <b>seen</b> · paint – painted – <b>painted</b> · sell – sold – <b>sold</b> · find – found – <b>found</b></p>`}
   ],
   quiz:[
    {q:"Is this sentence active or passive? 'The emails are sent every morning.'", o:["active","passive"], a:1, e:"are + sent (be + 3rd form) → passive."},
    {q:"Is this sentence active or passive? 'The secretary is sending the emails.'", o:["active","passive"], a:0, e:"is + sending = present continuous (be + -ing) → active."},
    {q:"Is this sentence active or passive? 'The Sunflowers were painted by Van Gogh.'", o:["active","passive"], a:1, e:"were + painted → passive (past)."},
    {q:"Which words should you underline as the passive? 'The office is cleaned every evening.'", o:["office is","is cleaned","cleaned every","every evening"], a:1, e:"Passive = be + past participle: is cleaned."},
    {q:"Make it passive: 'The manager signs the contracts.'", o:["The contracts are signed by the manager.","The contracts is signed by the manager.","The contracts signed by the manager.","The manager is signed the contracts."], a:0, e:"contracts (plural) → are + signed."},
    {q:"Make it passive: 'Van Gogh painted The Starry Night.'", o:["The Starry Night is painted by Van Gogh.","The Starry Night was painted by Van Gogh.","The Starry Night has painted by Van Gogh.","The Starry Night painted Van Gogh."], a:1, e:"Past active → past passive: was painted."},
    {q:"The new printer ___ yesterday.", o:["delivered","was delivered","is delivered","were delivered"], a:1, e:"Yesterday → past passive, singular: was delivered."},
    {q:"English ___ in many countries.", o:["is spoken","speaks","is speaking","spoken"], a:0, e:"Present passive: is + spoken."},
    {q:"What is the past participle of 'write'?", o:["wrote","writed","written","writing"], a:2, e:"write – wrote – written."},
    {q:"Make it active: 'The letters were typed by the secretary.'", o:["The secretary typed the letters.","The secretary types the letters.","The secretary was typed the letters.","The letters typed the secretary."], a:0, e:"Past passive → past active: typed."},
    {q:"The meeting room ___ every day.", o:["is clean","cleans","is cleaned","cleaned"], a:2, e:"Present passive: is + cleaned."},
    {q:"Only one painting ___ during Van Gogh's life.", o:["sold","was sold","is sold","were sold"], a:1, e:"Past passive singular: was sold."},
    {q:"Which sentence is passive?", o:["They built the office in 2010.","The office was built in 2010.","They are building an office.","The office has many rooms."], a:1, e:"was + built → passive."},
    {q:"The documents must ___ today.", o:["be signed","signed","be signing","signs"], a:0, e:"Modal + be + past participle: must be signed."}
   ]},

  {nr:"5", titel:"Past simple: questions & negatives (Van Gogh)",
   cards:[
    {h:"Past simple – use & form", b:`<p>For finished actions in the past (yesterday, last week, in 1888, … ago).</p><ul><li>regular: verb + <b>ed</b> → painted, lived, worked</li><li>irregular: 2nd form → go → <b>went</b>, sell → <b>sold</b>, cut → <b>cut</b></li></ul>`},
    {h:"Questions with DID", b:`<p><b>(Question word) + did + subject + infinitive?</b></p><ul><li><b>Did</b> Van Gogh <b>paint</b> sunflowers? (NOT: painted)</li><li>Where <b>did</b> he <b>live</b>?</li><li>When <b>did</b> he <b>die</b>?</li></ul><p class="q">did trägt die Vergangenheit → das Verb wird NICHT verändert!</p>`},
    {h:"Negatives with DIDN'T", b:`<p><b>subject + didn't + infinitive</b></p><ul><li>He <b>didn't sell</b> many paintings. (NOT: didn't sold)</li><li>He <b>didn't become</b> famous during his life.</li></ul><p>Short answers: Yes, he did. / No, he didn't.</p>`},
    {h:"do / does / did overview", b:`<ul><li>present (I/you/we/they): <b>Do</b> you work? – I <b>don't</b> work.</li><li>present (he/she/it): <b>Does</b> she work? – She <b>doesn't</b> work.</li><li>past (all persons): <b>Did</b> she work? – She <b>didn't</b> work.</li></ul><p>After do/does/did always the <b>infinitive</b> (base form).</p>`},
    {h:"Exception: was / were", b:`<p>With <b>be</b> we don't use did!</p><ul><li><b>Was</b> Van Gogh Dutch? – Yes, he <b>was</b>.</li><li>He <b>wasn't</b> rich.</li><li><b>Were</b> his paintings popular? – No, they <b>weren't</b>.</li></ul>`},
    {h:"Vincent van Gogh – short facts", b:`<ul><li><b>born</b> 1853 in the Netherlands</li><li>worked as an art dealer, started painting at about 27</li><li>lived in Paris with his brother <b>Theo</b>, then moved to <b>Arles</b> (France) in 1888</li><li>painted <i>Sunflowers</i> (1888) and <i>The Starry Night</i> (1889)</li><li>cut off part of his <b>ear</b> in 1888</li><li>sold very few paintings (traditionally only one), <b>died</b> in 1890</li></ul>`}
   ],
   quiz:[
    {q:"___ Van Gogh paint sunflowers?", o:["Do","Does","Did","Was"], a:2, e:"Past question → Did + subject + infinitive."},
    {q:"Which question is correct?", o:["Did he painted The Starry Night?","Did he paint The Starry Night?","Does he painted The Starry Night?","Painted he The Starry Night?"], a:1, e:"After did the verb is NOT changed: Did he paint…?"},
    {q:"Where ___ Van Gogh live in 1888?", o:["did / lived","did / live","does / live","was / live"], a:1, e:"Where did he live? (infinitive after did)."},
    {q:"Which sentence is correct?", o:["He didn't sold many paintings.","He didn't sell many paintings.","He don't sell many paintings.","He not sold many paintings."], a:1, e:"didn't + infinitive: didn't sell."},
    {q:"___ Van Gogh Dutch? – Yes, he ___.", o:["Did / did","Was / was","Does / does","Were / were"], a:1, e:"With 'be' no did: Was he Dutch? – Yes, he was."},
    {q:"Make a question: 'He moved to Arles.' → ___", o:["Did he move to Arles?","Did he moved to Arles?","Moved he to Arles?","Does he moved to Arles?"], a:0, e:"Did + subject + infinitive (move)."},
    {q:"When ___ The Starry Night?", o:["did he paint","did he painted","he painted","does he painted"], a:0, e:"Question word + did + subject + infinitive."},
    {q:"Short answer: 'Did he become famous during his life?' – 'No, he ___.'", o:["didn't","doesn't","wasn't","don't"], a:0, e:"Short answer with did: No, he didn't."},
    {q:"Which question asks about the subject (no did)?", o:["Who painted The Starry Night?","Who did paint The Starry Night?","Who did painted The Starry Night?","Who does paint The Starry Night?"], a:0, e:"Subject questions (Who…? as subject) use no did: Who painted…?"},
    {q:"What did Van Gogh paint in 1888?", o:["Sunflowers","The Mona Lisa","The Scream","Guernica"], a:0, e:"He painted Sunflowers in 1888 (The Starry Night in 1889)."},
    {q:"Who was Theo?", o:["his brother","his teacher","his doctor","his friend from school"], a:0, e:"Theo van Gogh was Vincent's brother; Vincent lived with him in Paris."},
    {q:"Past simple of 'go' / 'sell' / 'cut':", o:["goed / selled / cutted","went / sold / cut","went / sold / cutted","gone / sold / cut"], a:1, e:"Irregular: go – went, sell – sold, cut – cut."},
    {q:"___ his paintings popular during his life?", o:["Was","Did","Were","Do"], a:2, e:"paintings = plural, past of be → Were."},
    {q:"I ___ (not / see) the email yesterday.", o:["didn't see","didn't saw","don't saw","wasn't see"], a:0, e:"didn't + infinitive: didn't see."}
   ]},

  {nr:"6", titel:"Past simple & Past perfect",
   cards:[
    {h:"What is the past perfect?", b:`<p>The past perfect shows an action that happened <b>before another action in the past</b> (Vorvergangenheit).</p><p><i>When we <b>had eaten</b>, we <b>went</b> to the park.</i><br>1st: eat (past perfect) → 2nd: go to the park (past simple)</p>`},
    {h:"Form", b:`<p><b>had + past participle (3rd form)</b> – for all persons</p><ul><li>I/you/he/she/we/they <b>had finished</b></li><li>negative: <b>hadn't</b> finished</li><li>question: <b>Had</b> you finished?</li></ul><p>Short form: I'd eaten = I had eaten.</p>`},
    {h:"Timeline", b:`<p>earlier past ← <b>past perfect</b> | then ← <b>past simple</b> | now</p><ul><li>The meeting <b>had started</b> when I <b>arrived</b>. (it started first)</li><li>The meeting <b>started</b> when I <b>arrived</b>. (both at the same time)</li></ul>`},
    {h:"Signal words", b:`<p><b>after, before, when, by the time, already, just, never … before</b></p><ul><li><b>After</b> she <b>had sent</b> the email, she <b>went</b> home.</li><li>She <b>went</b> home <b>after</b> she <b>had sent</b> the email.</li><li><b>By the time</b> we arrived, the train <b>had</b> already <b>left</b>.</li></ul>`},
    {h:"Van Gogh example", b:`<ul><li>Before Van Gogh <b>became</b> a painter, he <b>had worked</b> as an art dealer.</li><li>When he <b>moved</b> to Arles, he <b>had</b> already <b>lived</b> in Paris.</li><li>He <b>had painted</b> about 900 paintings when he <b>died</b> in 1890.</li></ul>`}
   ],
   quiz:[
    {q:"When we ___, we went to the park.", o:["have eaten","had eaten","ate already","eat"], a:1, e:"The earlier action (eating) → past perfect: had eaten."},
    {q:"Form of the past perfect:", o:["have + past participle","had + past participle","was + -ing","did + infinitive"], a:1, e:"had + 3rd form for all persons."},
    {q:"After she ___ the report, she went home.", o:["had finished","has finished","finishes","was finish"], a:0, e:"Finished first → past perfect: had finished."},
    {q:"By the time we arrived, the train ___.", o:["already left","had already left","has already left","leaves already"], a:1, e:"The train left before we arrived → had already left."},
    {q:"Which action happened FIRST? 'When I arrived, the meeting had started.'", o:["I arrived","the meeting started"], a:1, e:"Past perfect (had started) = the earlier action."},
    {q:"Before he became a painter, Van Gogh ___ as an art dealer.", o:["had worked","has worked","works","is working"], a:0, e:"Earlier past → had worked."},
    {q:"She ___ (never / see) the sea before she went to Italy.", o:["had never seen","never saw","has never seen","never had see"], a:0, e:"Experience before a past moment → had never seen."},
    {q:"I didn't call him because I ___ his number.", o:["had lost","have lost","lose","was lose"], a:0, e:"Losing the number happened earlier → had lost."},
    {q:"Which sentence is correct?", o:["When I had arrived, they had left already. (both past perfect)","When I arrived, they had already left.","When I have arrived, they left.","When I arrive, they had left."], a:1, e:"Later action → past simple (arrived), earlier action → past perfect (had left)."},
    {q:"Question: '___ you finished your homework before the film started?'", o:["Have","Did","Had","Were"], a:2, e:"Past perfect question: Had + subject + 3rd form."},
    {q:"The boss was angry because we ___ the deadline.", o:["didn't met","hadn't met","haven't met","don't meet"], a:1, e:"Missed the deadline first → hadn't met."},
    {q:"After they ___ lunch, they ___ back to the office.", o:["had had / went","have had / go","had / had gone","have / went"], a:0, e:"First lunch (had had), then went back (past simple)."}
   ]},

  {nr:"7", titel:"Used to (früher immer gemacht)",
   cards:[
    {h:"Meaning of 'used to'", b:`<p><b>used to + infinitive</b> = something that happened <b>regularly in the past</b> or was true in the past, but is <b>not true now</b>.</p><p class="q">früher immer gemacht – heute nicht mehr</p><ul><li>I <b>used to play</b> football. (Now I don't.)</li><li>There <b>used to be</b> a cinema here.</li></ul>`},
    {h:"Form", b:`<ul><li>positive: I/he/they <b>used to work</b> (same for all persons)</li><li>negative: I <b>didn't use to</b> work (without -d!)</li><li>question: <b>Did</b> you <b>use to</b> work? (without -d!)</li></ul><p>After did → <b>use to</b>, not used to.</p>`},
    {h:"Examples – office & school", b:`<ul><li>We <b>used to write</b> letters, now we write emails.</li><li>Offices <b>used to have</b> typewriters.</li><li>I <b>didn't use to</b> like English, but now I do.</li><li><b>Did</b> you <b>use to</b> walk to school?</li></ul>`},
    {h:"Don't mix it up!", b:`<ul><li><b>used to do</b> = früher (habit in the past)<br><i>I used to get up at 6.</i></li><li><b>be used to doing</b> = an etwas gewöhnt sein<br><i>I am used to getting up early.</i></li></ul><p>For the classpaper: <b>used to + infinitive</b> = früher immer gemacht.</p>`},
    {h:"used to vs. past simple", b:`<ul><li><b>used to</b> → repeated habit / long state in the past<br><i>He used to visit his grandma every Sunday.</i></li><li><b>past simple</b> → one finished action<br><i>He visited his grandma last Sunday.</i></li></ul><p>Not with one single time: ✘ I used to go to Paris last year.</p>`}
   ],
   quiz:[
    {q:"What does 'used to' mean?", o:["something I do every day now","something I did regularly in the past but not now","something I will do","something I am doing now"], a:1, e:"used to = früher immer gemacht, heute nicht mehr."},
    {q:"When I was a child, I ___ in Iran.", o:["use to live","used to live","used to living","was used to live"], a:1, e:"Past habit/state: used to + infinitive."},
    {q:"Negative: I ___ like vegetables.", o:["didn't used to","didn't use to","not used to","don't used to"], a:1, e:"After didn't → use to (no -d)."},
    {q:"Question: ___ you ___ play the piano?", o:["Did / used to","Did / use to","Do / used to","Were / use to"], a:1, e:"Did + subject + use to + infinitive."},
    {q:"Which sentence is correct?", o:["Offices used to have typewriters.","Offices use to had typewriters.","Offices used to having typewriters.","Offices were used to have typewriters."], a:0, e:"used to + infinitive (have)."},
    {q:"Which sentence is WRONG?", o:["I used to go to Paris last year.","I used to go to Paris every summer.","We used to write letters.","There used to be a shop here."], a:0, e:"'used to' is for repeated habits, not one single time (last year)."},
    {q:"'I used to get up at 6.' means …", o:["Ich bin gewöhnt, um 6 aufzustehen.","Früher bin ich immer um 6 aufgestanden.","Ich stehe jetzt um 6 auf.","Ich werde um 6 aufstehen."], a:1, e:"used to + infinitive = früher (immer)."},
    {q:"There ___ a cinema in our town, but now it's a supermarket.", o:["used to be","use to be","used to being","was used to be"], a:0, e:"used to be = there was in the past, not now."},
    {q:"He ___ smoke, but he stopped two years ago.", o:["used to","uses to","is used to","use to"], a:0, e:"Past habit, now stopped → used to smoke."},
    {q:"Before email, people ___ letters.", o:["used to write","used to wrote","use to writing","were used write"], a:0, e:"used to + infinitive: write."},
    {q:"Which one means 'an etwas gewöhnt sein'?", o:["used to do","be used to doing","use to do","using to do"], a:1, e:"be used to + -ing = gewöhnt sein; used to + infinitive = früher."}
   ]},

  {nr:"✓", titel:"Mixed classpaper practice",
   cards:[
    {h:"Checklist for the classpaper", b:`<ul><li>he/she/it → <b>-s</b> (present simple)</li><li>allgemein → simple, gerade → <b>am/is/are + -ing</b></li><li>passive = <b>be + 3rd form</b> (underline both parts)</li><li>did / do / does → verb <b>not</b> changed</li><li>earlier past → <b>had + 3rd form</b></li><li>früher immer → <b>used to + infinitive</b></li></ul>`}
   ],
   quiz:[
    {q:"Yesterday the manager ___ a new colleague.", o:["hires","hired","is hiring","has hire"], a:1, e:"Yesterday → past simple: hired."},
    {q:"Right now the cleaner ___ the kitchen.", o:["cleans","is cleaning","cleaned","clean"], a:1, e:"Right now → present continuous."},
    {q:"The contracts ___ by the boss every Friday.", o:["sign","are signed","signed","are signing"], a:1, e:"Passive present: are + signed."},
    {q:"___ Van Gogh ___ his ear?", o:["Did / cut","Did / cutted","Does / cut","Was / cut"], a:0, e:"Did + subject + infinitive (cut)."},
    {q:"When I got to the office, my colleagues ___ home.", o:["already went","had already gone","have already gone","go already"], a:1, e:"Going home happened earlier → had already gone."},
    {q:"I ___ walk to school, but now I take the bus.", o:["used to","use to","am used to","was used"], a:0, e:"früher immer → used to + infinitive."},
    {q:"She ___ (not / like) her new job.", o:["doesn't like","isn't liking","don't like","doesn't likes"], a:0, e:"'like' = state verb, he/she → doesn't + infinitive."},
    {q:"Which sentence is passive?", o:["The IT technician is fixing the printer.","The printer is fixed every month.","The IT technician fixes printers.","The printer fixed itself."], a:1, e:"is + fixed (be + 3rd form)."},
    {q:"Who answers the phone and greets visitors?", o:["receptionist","accountant","HR manager","IT technician"], a:0, e:"The receptionist."},
    {q:"Where ___ Vincent van Gogh born?", o:["did","was","is","were"], a:1, e:"born = passive form of be: Where was he born?"},
    {q:"He ___ (work) at home today because the office is closed.", o:["works","is working","work","worked"], a:1, e:"today / temporary → present continuous."},
    {q:"After the meeting ___, everyone went to lunch.", o:["had finished","has finished","finishes","finishing"], a:0, e:"Earlier action → past perfect."}
   ]}
  ]
});
