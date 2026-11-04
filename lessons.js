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
